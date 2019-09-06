const fetch = require("node-fetch");

const { keyUtils } = require("@transmute/es256k-jws-ts");

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

// https://github.com/w3c-ccg/did-spec/pull/270
const convertPublicKeyHexToPublicKeyJwk = async didDoc => {
  const mutatedDoc = { ...didDoc };
  const hexToJWKs = await Promise.all(
    mutatedDoc.publicKey.map(async k => {
      if (k.publicKeyHex && k.type === "Secp256k1VerificationKey2018") {
        const jwk = await keyUtils.publicJWKFromPublicKeyHex(k.publicKeyHex);
        return {
          id: `${didDoc.id}#key-${jwk.kid}`,
          type: k.type,
          originalId: k.id,
          controller: didDoc.id,
          publicKeyJwk: jwk
        };
      }
      return undefined;
    })
  );
  mutatedDoc.publicKey = [...hexToJWKs, ...mutatedDoc.publicKey];
  mutatedDoc.publicKey = mutatedDoc.publicKey.filter(key => {
    return key && key.id;
  });

  return mutatedDoc;
};

module.exports = {
  resolve: async didUri => {
    try {
      const res = await getJson(
        "https://uniresolver.io/1.0/identifiers/" + didUri
      );
      // These transformations are related to:
      // https://github.com/w3c-ccg/did-spec/pull/270
      // If a DID is created with an old context, and wants to add new key types,
      // its not clear exactly how to support that, so key conversion hacks like this are
      // saddly necessary until the context can be updated.
      const doc = await normalizeDocument(res);
      const converted = await convertPublicKeyHexToPublicKeyJwk(doc);
      return converted;
    } catch (e) {
      throw new Error("Could not resolve: " + didUri);
    }
  }
};
