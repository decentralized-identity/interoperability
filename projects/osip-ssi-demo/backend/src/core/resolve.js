import fetch from 'node-fetch'

const SUPPORTED_PUBLIC_KEY_TYPES = {
  ES256K: ['Secp256k1VerificationKey2018', 'Secp256k1SignatureVerificationKey2018', 'EcdsaPublicKeySecp256k1'],
  'ES256K-R': ['Secp256k1VerificationKey2018', 'Secp256k1SignatureVerificationKey2018', 'EcdsaPublicKeySecp256k1'],
  'Ed25519': ['ED25519SignatureVerification']
}

export default async function resolveAuthenticator (alg, issuer, auth = false) {
  const types = SUPPORTED_PUBLIC_KEY_TYPES[alg]
  if (!types || types.length === 0) throw new Error(`No supported signature types for algorithm ${alg}`)
  // Update with uniresolver

  const resp = await fetch('http://127.0.0.1:8080/1.0/identifiers/' + issuer);
  const respBody = await resp.json();

  const doc = respBody.didDocument
  if (!doc) throw new Error(`Unable to resolve DID document for ${issuer}`)

  const authenticationKeys = auth ? (doc.authentication || []).map(({ publicKey }) => publicKey) : true
  const authenticators = (doc.publicKey || []).filter(({ type, id }) => types.find(supported => supported === type && (!auth || authenticationKeys.indexOf(id) >= 0)))
  if (auth && (!authenticators || authenticators.length === 0)) throw new Error(`DID document for ${issuer} does not have public keys suitable for authenticationg user`)
  if (!authenticators || authenticators.length === 0) throw new Error(`DID document for ${issuer} does not have public keys for ${alg}`)
  return { authenticators, issuer, doc }
}
