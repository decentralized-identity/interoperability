const btcr = require("../src/btcr-did");
const wololo = require("txref-conversion-js");

const env = require("../env.json");

(async () => {
  const result = await btcr.createBtcrDid(
    env.address,
    env.address,
    "testnet",
    env.wif,
    "https://raw.githubusercontent.com/OR13/self/master/ddo.jsonld",
    0.005
  );

  console.log("Transaction ID: ", result.data.txid);

  const txref = await wololo.txidToTxref(result.data.txid);
  const did = txref.replace("txtest1", "did:btcr");
  console.log("Your BTCR DID Will be: ");
  console.log(did);
})();
