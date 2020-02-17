import {backend} from "./requestEid"

let date = new Date()

export const credentialOffer = {
  "interactionToken": {
    "offeredCredentials": [
      {
        "type": [
          "Credential",
          "OsipCredential"
        ]
      }
    ],
    "callbackURL": `${backend}/ssi/requestCredential`
  },
  "typ": "credentialOfferRequest",
  "iat": date.getTime(),
  "exp": date.getTime() + 2592000000, // In case the interaction token is passed via an email, it might make sense to extend the expiry time of the token, so the user's don't have to tap it right away.
  "iss": "did:7hirten:0x764a8cc33787d3e7bb5a71a4aee0cba9876dce5d", // The DID of the offering service.
  "jti": "a3396a442ecdc" // Unique nonce for the interaction
}
