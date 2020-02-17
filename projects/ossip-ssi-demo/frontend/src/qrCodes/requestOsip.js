let did  = require("../did")
const uuidv1 = require('uuid/v1')
let date = new Date()

let qr = {
  "interactionToken": {
    "credentialRequirements": [
      {
        "type": [
          "VerifiableCredential",
          "OsipCredential"
        ],
        "constraints": [
          {
            "==": [
              {
                "var": "issuer"
              },
              "did:7hirten:0x764a8cc33787d3e7bb5a71a4aee0cba9876dce5d"
            ]
          }
        ]
      }
    ],
    "callbackURL": "https://verify.vc/ssi/verifyCredential"
  },
  "clientId": uuidv1(),
  "typ": "credentialRequest",
  "iat": date.getTime(),
  "exp": date.getTime() + 2592000000,
  "iss": did.default,
  "jti": "example"
}

module.exports = qr;
