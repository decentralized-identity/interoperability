
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

app.post('/getclaim', async function (req, res) {

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

app.post('/verifyclaim', async function (req, res) {

  const vcJws = req.body

  console.log(req.body)
  
  const vcDecoded = await ES256K.JWS.decode(vcJws, { complete: true });

  const ddo = await resolver.resolve(vcDecoded.payload.iss);
  
  const publicKeyFromResolver = ddo.publicKey.find(k => {
    return k.id === vcDecoded.header.kid;
  });

  console.log(publicKeyFromResolver)
  
  const verified = await ES256K.JWS.verify(
    vcJws,
    publicKeyFromResolver.publicKeyJwk
  );

  res.send(JSON.stringify(verified))
})


app.listen(4000, function () {
  console.log('Server running on port 4000')
})
