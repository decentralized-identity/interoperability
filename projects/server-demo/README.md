# Interop Server Demo

This demonstrates a simple web service that can issue a verifiable credential, verify a credential and finally verify a presentation.

## Starting service

```
git clone git@github.com:decentralized-identity/interoperability.git
cd interoperability/projects/server-demo
npm install
node serverdemo.js
```

## Calling service APIs

Run these commands from a separate terminal window.

### Get an issued credential

Issue a credential to a given DID:

```
curl -H "Content-Type: text/plain" -d 'did:elem:eURSFEEv6J7s3TJ-jhT_ZS4uGRyCDbwc347EWlqpNgw' -X POST http://localhost:4000/getcredential > ./data/credential.txt
```

The service will return the issued credential in the form of a JWT.

### Verify a credential

```
curl -H "Content-Type: text/plain" -d '@./data/credential.txt' -X POST http://localhost:4000/verifycredential
```

The service will return a message in the form a JSON object with `verified` as the key and the decoded credential as the value.

### Verify a presentation

This command will verify a verifiable presentation. Please use the [CLI demo](https://github.com/decentralized-identity/interoperability/tree/master/cli-demo/src/methods/elem) in order to create a presentation. It will only work when you have a single credential in the presentation.

```
curl -H "Content-Type: text/plain" -d '@./data/presentation.txt' -X POST http://localhost:4000/verifypresentation
```

If verification is successful the service will return a JSON object with two keys, `verifiedPresentation` and `verifiedCredential`.
