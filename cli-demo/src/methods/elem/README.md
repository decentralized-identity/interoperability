### Element DID Commands

Some of these commands will take ~2 minutes, because they involve ethereum blockchain updates.

#### Create and Element DID and Wallet

```
npm run interop elem:create "password"
```

#### Resolve an Element DID

```
npm run interop resolve did:elem:eURSFEEv6J7s3TJ-jhT_ZS4uGRyCDbwc347EWlqpNgw
```

#### Add JWK key to DID

```
npm run interop elem:add-jwk "password"
```

#### Create a W3C Verfiable Credential

```
npm run interop elem:create-credential "password" did:example:123 ./data/elem-verifiable-credential.txt
```

#### Create a W3C Verifiable Presentation

```
npm run interop elem:create-presentation "password" did:example:123 ./data/elem-verifiable-credential.txt ./data/elem-verifiable-presentation.txt
```

#### Verify a W3C VC / VP JWT

```
npm run interop verify ./data/elem-verifiable-presentation.txt
```
