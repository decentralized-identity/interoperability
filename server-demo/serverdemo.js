
const express = require("express")
//const resolver = require("./resolver")
const fs = require('fs')
const path = require('path')
const ES256K = require("@transmute/es256k-jws-ts")

//Constants

const issuerDid = 'did:btcr:xxcl-lzpq-q83a-0d5'
const defaultExpiresInHours = 99999;
const pathToPrivateKeyJwk = '../cli-demo/privateKeyJwk.json'

const app = express()
app.use(express.json())

app.post('/getclaim', async function (req, res) {

  const subjectDid = req.body['did']
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

  res.send(JSON.stringify(vc))
})

app.listen(4000, function () {
  console.log('Testing')
})
