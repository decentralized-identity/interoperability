
const express = require("express")
const resolver = require("../cli-demo/src/resolver")
const fs = require('fs')
const path = require('path')
const ES256K = require("@transmute/es256k-jws-ts")

//Constants

const issuerDid = 'did:btcr:xxcl-lzpq-q83a-0d5'
const defaultExpiresInHours = 99999;
const pathToPrivateKeyJwk = '../cli-demo/privateKeyJwk.json'

const app = express()
app.use(express.text())

app.post('/getcredential', async function (req, res) {

  const subjectDid = req.body
  console.log(req.body)

  const claim = {'claimType' : 'Diploma', 'degree' : 'masters'}
  
  const privateKeyJwk = JSON.parse(
    fs
      .readFileSync(path.resolve(process.cwd(), pathToPrivateKeyJwk)
      .toString()
                   )
  )

  const innerPayload = {
    iss: issuerDid,
    sub: subjectDid,
    ...claim,
    iat : Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * defaultExpiresInHours
  }
  const vc = await ES256K.JWS.sign(innerPayload, privateKeyJwk, {
    alg: "ES256K",
    kid: issuerDid + '#key-' + privateKeyJwk.kid
  })

  res.send(vc)
})

app.post('/verifycredential', async function (req, res) {

  const vcJws = req.body

  const vcDecoded = await ES256K.JWS.decode(vcJws, { complete: true });

  const ddo = await resolver.resolve(vcDecoded.payload.iss);
  
  const publicKeyFromResolver = ddo.publicKey.find(k => {
    return k.id === vcDecoded.header.kid;
  });

  const verified = await ES256K.JWS.verify(
    vcJws,
    publicKeyFromResolver.publicKeyJwk
  );

  res.send(JSON.stringify({"verified" : verified}))
})


app.post('/verifypresentation', async function (req, res) {

  const presJws = req.body
  
  const presDecoded = await ES256K.JWS.decode(presJws, { complete: true });

  const ddoOfPresIssuer = await resolver.resolve(presDecoded.payload.iss);
  
  const publicKeyOfPresIssuer = ddoOfPresIssuer.publicKey.find(k => {
    return k.id === presDecoded.header.kid;
  });
  
  const verifiedPres = await ES256K.JWS.verify(
    presJws,
    publicKeyOfPresIssuer.publicKeyJwk
  );

  const vcJws = verifiedPres["vp"]["verifiableCredential"][0]

  const vcDecoded = await ES256K.JWS.decode(vcJws, { complete: true });

  const ddoOfCredIssuer = await resolver.resolve(vcDecoded.payload.iss);
  
  const publicKeyOfCredIssuer = ddoOfCredIssuer.publicKey.find(k => {
    return k.id === vcDecoded.header.kid;
  });

  const verifiedCred = await ES256K.JWS.verify(
    vcJws,
    publicKeyOfCredIssuer.publicKeyJwk
  );
  
  
  res.send(JSON.stringify({"verifiedPresentation" : verifiedPres, "verifiedCredential" : verifiedCred}))
})



app.listen(4000, function () {
  console.log('Server running on port 4000')
})
