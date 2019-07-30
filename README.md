# Interop Project

A project to demonstrate interoperability of DID Methods and verifiable credentials supported by DIF Members.

The project consists of a series of tools and web applications which support interactions with DIDs, for the purpose of demonstrating DID VC issuance and consumption.

## DID Resolution

Only DID Methods supported by the [universal-resolver](https://github.com/decentralized-identity/universal-resolver), will be supported.

## DID Auth

Before credential issuance, and verifification, the subject must authenticate with the Issuer and Verifier Web Server over HTTPS, using a method TBD.

## Credential Format

The Credential format will be a JWT, it may have a wrapped format to support wallets that is TBD.

## Issuer

The Issuer website will be an http web server which contains private keys registerd to a BTC-R DID.

## Verifier

The Verifier website will be an http web server.

## Related DIF Work

- [Papers](https://github.com/decentralized-identity/papers)
- [DID Auth JOSE](https://github.com/decentralized-identity/did-auth-jose)
- [Universal Resolver](https://github.com/decentralized-identity/universal-resolver)
