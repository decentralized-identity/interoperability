let date = new Date()

const credentialType = ['Credential', 'EidCredential']
const whitelistedIssuer = "did:7hirten:0x764a8cc33787d3e7bb5a71a4aee0cba9876dce5d#keys-1"
export const backend = "https://osip.vc"

export const credentialRequest = {
  "interactionToken": {
    "credentialRequirements": [
      {
        "type": credentialType,
        "constraints": []
      }
    ],
    "callbackURL": `${backend}/ssi/sendCredential`
  },
  "typ": "credentialRequest",
  "iat": date.getTime(),
  "exp": date.getTime() + 2592000000,
  "iss": whitelistedIssuer,
  "jti": "a3396a442ecdc"
}
