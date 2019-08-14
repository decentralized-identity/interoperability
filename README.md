# Interop Project

A project to demonstrate interoperability of DID Methods and verifiable credentials supported by DIF Members.

The project consists of a series of tools and web applications which support interactions with DIDs, for the purpose of demonstrating DID VC issuance and consumption.

## DID Resolution

Only DID Methods supported by the [universal-resolver](https://github.com/decentralized-identity/universal-resolver), will be supported.

## DID Auth

[OIDC SIOP](https://github.com/decentralized-identity/papers/tree/master/did-authn/siop)

We will be implementing and deploying the first version of this. Please comment on the [Identity Wallet Issue](https://github.com/decentralized-identity/interop-project/issues/11)

## Credential Format

[ES256K JWT / JSON-LD Signatures](https://github.com/decentralized-identity/lds-ecdsa-secp256k1-2019.js)

Per discussion on [#5](https://github.com/decentralized-identity/interop-project/issues/5)

```
{
    "alg": "ES256K",
    "typ": "JWT",
    // (optional) don’t use kid if you only have one verification key
    // in your DID Document
    "kid": "did:example:abfe13f712120431c276e12ecab#keys-1"
}

{
  "sub": "did:example:ebfeb1f712ebc6f1c276e12ec21",
  "jti": "fasdfasdfsdfa",
  "iss": "did:example:asdf",
  // iat is not part yet part of the W3C spec but mentioned
  // in the implementation guide. This is due to issuanceDate’s semantic
  "iat": 1541493724,
  "nbf": 1541493724,
  "exp": 1573029723,

  // .. add JOSE specific claims here

  "vc": {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "type": ["VerifiableCredential", "UniversityDegreeCredential"],
    "credentialSubject": {
      "degree": {
        "type": "BachelorDegree",
        "university": "MIT"
      }
    }
  }
}
```

And for the W3C presentation we could use:

```
{
  "alg": "ES256K",
  "typ": "JWT",
  // don’t use kid if you only have one verification key
  // in your DID Document
  "kid": "did:example:ebfeb1f712ebc6f1c276e12ec21#keys-1"
}

{
  "iss": "did:example:ebfeb1f712ebc6f1c276e12ec21",
  "jti": "urn:uuid:3978344f-8596-4c3a-a978-8fcaba3903c5",
  "aud": "did:example:4a57546973436f6f6c4a4a57573",
  "iat": 1541493724,
  "nbf": 1541493724,
  "exp": 1573029723,

  // .. add other JOSE/IANA claims here such as “nonce”

  "vp": {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://www.w3.org/2018/credentials/examples/v1"
    ],
    "type": ["VerifiablePresentation", "CredentialManagerPresentation"],
    // base64url-encoded JWT as string
    "verifiableCredential": ["..."]
  }
}
```

## Issuer

The Issuer website will be an http web server which contains private keys registerd to a BTC-R DID.

The linkage will be via the [well-known/did-configuration](https://github.com/decentralized-identity/well-known/tree/master/did-configuration)

## Verifier

The Verifier website will be an http web server.

## Related DIF Work

- [Papers](https://github.com/decentralized-identity/papers)
- [DID Auth JOSE](https://github.com/decentralized-identity/did-auth-jose)
- [Universal Resolver](https://github.com/decentralized-identity/universal-resolver)

## Mailing List

Please join the mailing list by sending an email to: InteropProject+subscribe@dif.groups.io
