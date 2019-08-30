// https://github.com/WebOfTrustInfo/btcr-did-tools-js
// MIT

const bitcoin = require("bitcoinjs-lib");
const request = require("txref-conversion-js").promisifiedRequest;

const SATOSHIS_PER_BTC = 100000000;

const CHAIN_SO = "https://chain.so/api/v2";

class UnspentOut {
  /**
   *
   * @param address
   * @param txid
   * @param amount in BTC
   * @param numConfirmations
   * @param script
   */
  constructor(address, txid, amount, numConfirmations, script, index) {
    this.address = address;
    this.txid = txid;
    this.amount = amount;
    this.numConfirmations = numConfirmations;
    this.script = script;
    this.index = index;
  }
}

class ChainSoConnector {
  constructor(network) {
    this.baseUrl = CHAIN_SO;
    this.networkCode = network === bitcoin.networks.bitcoin ? "BTC" : "BTCTEST";
  }

  getUnspentOutputs(address) {
    let url =
      this.baseUrl + "/get_tx_unspent/" + this.networkCode + "/" + address;
    let obj = {
      url: url
    };
    return request(obj)
      .then(result => {
        let resultJson = JSON.parse(result);
        if (!resultJson.data.txs || resultJson.data.txs.length == 0) {
          throw Error("no unspent outputs for address " + address);
        }
        let firstUnspent = resultJson.data.txs[0];
        return new UnspentOut(
          address,
          firstUnspent.txid,
          firstUnspent.value,
          firstUnspent.confirmations,
          firstUnspent.script_hex,
          firstUnspent.output_no
        );
      })
      .catch(err => {
        console.error(err);
        throw err;
      });
  }

  broadcast(hextx) {
    let url = this.baseUrl + "/send_tx/" + this.networkCode;
    let obj = {
      url: url,
      method: "POST",
      body: { tx_hex: hextx }
    };
    //https://chain.so/api/v2/send_tx/BTCTEST
    return request(obj)
      .then(result => {
        return result;
      })
      .catch(err => {
        console.error(err);
        throw err;
      });
  }
}

const createDidTx = function(
  network,
  wif,
  unspentOutput,
  outputAddress,
  ddo1Ref,
  changeAmount
) {
  let tx = new bitcoin.TransactionBuilder(network);
  tx.addInput(unspentOutput.txid, unspentOutput.index);
  tx.addOutput(outputAddress, changeAmount);

  if (ddo1Ref != null) {
    let data = new Buffer(ddo1Ref);
    let ret = bitcoin.script.compile([bitcoin.opcodes.OP_RETURN, data]);
    tx.addOutput(ret, 0);
  }
  let key = bitcoin.ECPair.fromWIF(wif, network);
  tx.sign(0, key);
  return tx.build().toHex();
};

const createBtcrDid = function(
  inputAddress,
  changeAddress,
  network,
  wif,
  ddo1Ref,
  fee
) {
  let theNetwork =
    network === "mainnet" ? bitcoin.networks.mainnet : bitcoin.networks.testnet;

  let connector = new ChainSoConnector(theNetwork);

  return new Promise((resolve, reject) => {
    connector
      .getUnspentOutputs(inputAddress)
      .then(unspentOutput => {
        let change = unspentOutput.amount - fee; // BTC
        let changeSatoshi = Math.round(change * SATOSHIS_PER_BTC); // SATOSHI
        let signedHexTx = createDidTx(
          theNetwork,
          wif,
          unspentOutput,
          changeAddress,
          ddo1Ref,
          changeSatoshi
        );
        connector
          .broadcast(signedHexTx)
          .then(result => {
            // console.log("transaction details:" + result);
            resolve(result);
          })
          .catch(err => {
            console.error(err);
            reject(err);
          });
      })
      .catch(err => {
        console.error(err);
        reject(err);
      });
  });
};

module.exports = {
  createBtcrDid: createBtcrDid
};
