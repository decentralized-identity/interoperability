const secureRandom = require("secure-random");
const bitcoin = require("bitcoinjs-lib");

function rng() {
  //   return Buffer.from("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
  return secureRandom.randomBuffer(32);
}

const keyPair = bitcoin.ECPair.makeRandom({ rng: rng });

// important or you will get network failure errors.
keyPair.network = bitcoin.networks.testnet;

const { address } = bitcoin.payments.p2pkh({
  pubkey: keyPair.publicKey,
  network: bitcoin.networks.testnet
});

const bitcoinEnvData = {
  address,
  wif: keyPair.toWIF(),
  publicKey: keyPair.publicKey.toString("hex"),
  privateKey: keyPair.privateKey.toString("hex")
};

console.log(JSON.stringify(bitcoinEnvData, null, 2));
