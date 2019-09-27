### BTCR DID Commands

#### Create BTCR DID

```
npm run interop btcr:create "password"
```

#### Resolve a BTCR DID

```
npm run interop resolve did:btcr:xxcl-lzpq-q83a-0d5
```

#### Create a W3C Verfiable Credential

```
npm run interop btcr:create-credential did:btcr:xxcl-lzpq-q83a-0d5 "ae1605b013c5f6adfeb994e1cbb0777382c317ff309e8cc5500126e4b2c2e19c" did:elem:eURSFEEv6J7s3TJ-jhT_ZS4uGRyCDbwc347EWlqpNgw ./data/btcr-verifiable-credential.txt
```

#### Create a W3C Verfiable Presentation

```
npm run interop btcr:create-presentation did:btcr:xxcl-lzpq-q83a-0d5 "ae1605b013c5f6adfeb994e1cbb0777382c317ff309e8cc5500126e4b2c2e19c" did:elem:eURSFEEv6J7s3TJ-jhT_ZS4uGRyCDbwc347EWlqpNgw ./data/btcr-verifiable-credential.txt ./data/btcr-verifiable-presentation.txt
```

#### Verify a W3C VC / VP JWT

```
npm run interop verify ./data/btcr-verifiable-presentation.txt
```
