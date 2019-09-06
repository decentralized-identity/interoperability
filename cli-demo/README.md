# Interop CLI Demo

```
npm i
```

# Usage

- [BTCR DID](./src/methods/btcr)
- [Element DID](./src/methods/elem)

## Resolve

```
npm run interop resolve did:btcr:xxcl-lzpq-q83a-0d5
```

## Verify

```
npm run interop verify ./vc.txt
```

## Convert Public Key Hex to Public Key JWK

```
npm run interop publicKeyHexToPublicKeyJwk "027560af3387d375e3342a6968179ef3c6d04f5d33b2b611cf326d4708badd7770"
```

## Convert Private Key Hex to Private Key JWK

```
npm run interop privateKeyHexToPublicKeyJwk "ae1605b013c5f6adfeb994e1cbb0777382c317ff309e8cc5500126e4b2c2e19c"
```
