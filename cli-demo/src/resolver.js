const fetch = require("node-fetch");

const getJson = async url =>
  fetch(url, {
    headers: {
      Accept: "application/ld+json"
    },
    method: "get"
  }).then(data => data.json());

const normalizeDocument = res => {
  const didDoc = { ...res.didDocument };
  // hack for BTCR to support other key types...
  if (res.methodMetadata && res.methodMetadata.continuation) {
    didDoc.publicKey = res.methodMetadata.continuation.publicKey;
  }

  return didDoc;
};

module.exports = {
  resolve: async didUri => {
    try {
      const res = await getJson(
        "https://uniresolver.io/1.0/identifiers/" + didUri
      );
      const doc = await normalizeDocument(res);
      return doc;
    } catch (e) {
      throw new Error("Could not resolve: " + didUri);
    }
  }
};
