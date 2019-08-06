const wololo = require("txref-conversion-js");

const txid = "494a5f8fbec0def4a29cca9c19f68eba5dd17d1575d254ca03fb12455225fde7";

(async () => {
  const txref = await wololo.txidToTxref(txid);
  const did = txref.replace("txtest1", "did:btcr");
  console.log(did);
})();
