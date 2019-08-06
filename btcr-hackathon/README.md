## Getting Started

Generate a keypair / env.json

```
npm run env:create
```

Get testnet BTC: https://coinfaucet.eu/en/btc-testnet/

Paste your address starting with an "n" or "m" for testnet.

Wait like 10 minutes for your funds...

Check for them here: https://live.blockcypher.com/btc-testnet/address/YOUR_ADDRESS/

Create a github repo called "self".

commit a file in the root called ddo.

It should look like: https://raw.githubusercontent.com/OR13/self/master/ddo.jsonld

update `./scripts/did_create.js` to match ^

`node ./scripts/did_create.js`

Look out for the transaction id:

https://live.blockcypher.com/btc-testnet/tx/69147c0e5691b44c885dc1532e976bb6f6299a874cfc0fe85da2d454556447c1/

Use the universal resolver to resolve your DID: https://uniresolver.io/1.0/identifiers/did%3Abtcr%3Axxcl-lzpq-q83a-0d5

It appears from this point on you an simply just update your ddo.jsonld, so no further bitcoin transactions are required to register keys.

It also appears that keys need to be revoked in some way other than simply updating the ddo...
