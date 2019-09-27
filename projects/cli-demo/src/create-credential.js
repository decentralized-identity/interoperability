const fs = require("fs");
const path = require("path");
const uuidv4 = require("uuid/v4");
const ES256K = require("@transmute/es256k-jws-ts");

const defaultExpiresInHours = 99999;

module.exports = async (issuerDid, subjectDid, privateKeyJwk) => {
  const claim = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "./claim.json")).toString()
  );

  const now = Math.floor(Date.now() / 1000);

  const innerPayload = {
    sub: subjectDid,
    jti: "urn:uuid:" + uuidv4(),
    iss: issuerDid,

    iat: now,
    nbf: now,
    exp: now + 60 * 60 * defaultExpiresInHours,

    ...claim
  };

  const vc = await ES256K.JWS.sign(innerPayload, privateKeyJwk, {
    alg: "ES256K",
    typ: "JWT",
    kid: issuerDid + "#key-" + privateKeyJwk.kid
  });

  return vc;
};
