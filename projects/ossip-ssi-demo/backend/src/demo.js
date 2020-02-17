let credentialS = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1"
  ],
  "id": "did:spherity:0xa23bf6394e63282814b23a5a65badfb7528bbb90",
  "type": [
    "VerifiableCredential",
    "EidCredential"
  ],
  "credentialSubject": {
    "id": "did:spherity:0x19e8f2eba41b0ca1922cb0c66decb38c2def4145",
    "documentNumber": "12345"
  },
  "issuer": "did:spherity:0x19e8f2eba41b0ca1922cb0c66decb38c2def4145",
  "issuanceDate": "2019-08-28T10:03:06.822Z",
  "proof": {
    "type": "EcdsaKoblitzSignature2016",
    "creator": "did:spherity:0x19e8f2eba41b0ca1922cb0c66decb38c2def4145",
    "created": "2019-08-28T10:03:06.839Z",
    "nonce": "7a537c71-479c-4f6d-bffb-cbfaceb88219",
    "signatureValue": "UmC30GvEnHYVXoyv_aNk8T3nyspDQRdWoRQJTlUJZj3ZiDFRiMua_lIP9ZS_A2by3dBoFPzp9HJcM7RSngYCAwA"
  }
}

let credentialO = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1"
  ],
  "id": "http://osip.vc/credentials/1",
  "type": [
    "VerifiableCredential",
    "OsipCredential"
  ],
  "credentialSubject": {
    "id": "did:jolo:ebfeb1f712ebc6f1c276e12ec21",
    "familyName": "test",
    "givenName": 1,
    "expiryDate": 1600594618269,
    "osip-check": "passed"
  },
  "issuer": "did:7hirten:0x764a8cc33787d3e7bb5a71a4aee0cba9876dce5d",
  "issuanceDate": "2020-08-21T09:36:58.269Z",
  "expirationDate": "2020-08-21T09:36:58.269Z",
  "proof": {
    "created": "2019-08-13T13:54:46.101Z",
    "type": "EcdsaKoblitzSignature2016",
    "nonce": "de535dda45be8a04",
    "creator": "did:7hirten:0x764a8cc33787d3e7bb5a71a4aee0cba9876dce5d",
    "signatureValue": "y-mDsG0l-vndV_oUFz9MJ0FAQbFJUolwlEmCopOQfZ6SU2nZm-MXwNAPiw9f7r2AThYq6LTc6brH_b2ghc4q5gE"
  },
}

let credentialJ = {
  "@context": ["https://w3id.org/did/v0.11", "https://w3id.org/did/v1", {"EcdsaKoblitzSignature2016": "sec:EcdsaKoblitzSignature2016"}, {
    "cred": "https://w3id.org/credentials#",
    "claim": {"@id": "cred:claim", "@type": "@id"},
    "Credential": "cred:Credential",
    "issuer": {"@id": "cred:issuer", "@type": "@id"},
    "issued": {"@id": "cred:issued", "@type": "xsd:dateTime"}
  }, {
    "ProofOfEmailCredential": "https://identity.jolocom.com/terms/ProofOfEmailCredential",
    "schema": "http://schema.org/",
    "email": "schema:email"
  }],
  "id": "claimId:530ec303cdf7286f",
  "issuer": "did:jolo:5600ce1f50e36f1574e53b2e6e90eee15aafaae46a4bcd0b35b94dd60b369b91",
  "issued": "2019-08-23T14:44:08.452Z",
  "type": ["Credential", "ProofOfEmailCredential"],
  "expires": "2020-08-23T14:44:08.452Z",
  "proof": {
    "created": "2019-08-23T14:44:08.451Z",
    "type": "EcdsaKoblitzSignature2016",
    "nonce": "9415a4d05073c511",
    "signatureValue": "3d7a954ee28f0ab5b5cede37fd4939d43e727232796e72a1669ed16cdeb0ee2c02b860f8df6119f88b2e7003cb7e9ff80ea4779612b520092b713bd92a15d18b",
    "creator": "did:jolo:5600ce1f50e36f1574e53b2e6e90eee15aafaae46a4bcd0b35b94dd60b369b91#keys-1"
  },
  "claim": {
    "email": "e.example@com",
    "id": "did:jolo:5600ce1f50e36f1574e53b2e6e90eee15aafaae46a4bcd0b35b94dd60b369b91"
  },
  "name": "Email address"
}

export default { credentialS, credentialO, credentialJ}
