const uuidv4 = require("uuid/v4");
const ES256K = require("@transmute/es256k-jws-ts");

const defaultExpiresInHours = 99999;

module.exports = async (vcJws, iss, aud, privateKeyJwk) => {
  const now = Math.floor(Date.now() / 1000);

  const innerPayload = {
    jti: "urn:uuid:" + uuidv4(),
    iss,

    aud,
    iat: now,
    nbf: now,
    exp: now + 60 * 60 * defaultExpiresInHours,

    vp: {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.w3.org/2018/credentials/examples/v1"
      ],
      type: ["VerifiablePresentation", "CredentialManagerPresentation"],
      // base64url-encoded JWT as string
      verifiableCredential: [vcJws]
    }
  };

  return ES256K.JWS.sign(innerPayload, privateKeyJwk, {
    alg: "ES256K",
    typ: "JWT",
    kid: iss + "#key-" + privateKeyJwk.kid
  });
};
