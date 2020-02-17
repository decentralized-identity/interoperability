import base64url from 'base64url'
import { sha256, keccak } from '../core/hash.js'
import EC from 'elliptic'
import parseJSONLD from '../core/jsonld.js'
import resolveAuthenticator from '../core/resolve.js'
import demo from '../demo.js'

const secp256k1 = new EC.ec('secp256k1')

const verifyDid = async (credential) => {
  try {
    const  { document, proof, tbs } = await parseJSONLD(credential)

    // TODO Figure out how to retain the alg here instead of hardcoding it
    const { authenticators } = await resolveAuthenticator("ES256K", document.issuer)

    let base64Signature, hexSignature

    /** TODO Change on Jolocom Lib side to encode sig correctly, currently encoded as HEX, should be B64 */
    if (isHex(proof.signatureValue)) {
      base64Signature = Buffer.from(proof.signatureValue, 'hex').toString('base64')
      hexSignature = proof.signatureValue
    } else {
      base64Signature = proof.signatureValue
      hexSignature = Buffer.from(proof.signatureValue, 'base64').toString('hex')
    }

    if ([65, 130].includes(hexSignature.length)) {
      verifyRecoverableES256K(tbs, base64Signature, authenticators)
    } else if ([64, 128].includes(hexSignature.length)) {
      verifyES256K(tbs, base64Signature, authenticators)
    } else {
      throw new Error('Signature invalid, length check not passed')
    }

    return true
  } catch(err){
    console.log(err);
    return false;
  }
}

function toSignatureObject(signature, recoverable = false) {
  const rawsig =
    signature.length === 130
      ? base64url.toBuffer(base64url.encode(Buffer.from(signature, 'hex')))
      : base64url.toBuffer(signature)

  // if (rawsig.length !== (recoverable ? 65 : 64)) throw new Error('wrong signature length')

  return {
    r: rawsig.slice(0, 32).toString('hex'),
    s: rawsig.slice(32, 64).toString('hex'),
    ...( recoverable ? { v: rawsig[64]} : {})
  }
}

function toEthereumAddress(hexPublicKey) {
  return `0x${keccak(Buffer.from(hexPublicKey.slice(2), 'hex'))
    .slice(-20)
    .toString('hex')}`
}

function verifyRecoverableES256K(data, signature, authenticators) {
  const sigObj = toSignatureObject(signature, true)
  const hash = sha256(data)
  const recoveredKey = secp256k1.recoverPubKey(hash, sigObj, sigObj.v)
  const recoveredPublicKeyHex = recoveredKey.encode('hex')
  const recoveredCompressedPublicKeyHex = recoveredKey.encode('hex', true)
  const recoveredAddress = toEthereumAddress(recoveredPublicKeyHex)
  const signer = authenticators.find(
    ({ publicKeyHex, ethereumAddress, ['sec:ethereumAddress']: secEthereumAddress }) =>
      publicKeyHex === recoveredPublicKeyHex ||
      publicKeyHex === recoveredCompressedPublicKeyHex ||
      ethereumAddress === recoveredAddress ||
      secEthereumAddress === recoveredAddress
  )
  if (!signer) {
    console.log(`Signaure object: ${sigObj}`)
    console.log(`Normilized data: ${data}`)
    console.log(`Digested data: ${hash}`)
    console.log(`Authenticators: ${authenticators}`)
    console.log(`Recovered Public Key Hex: ${recoveredPublicKeyHex}`)
    console.log(`Recovered Ethereum Address: ${recoveredAddress}`)
    throw new Error('Signature invalid')
  }
  return signer
}

function verifyES256K(data, signature, authenticators) {
  const hash = sha256(data)
  const sigObj = toSignatureObject(signature)
  const signer = authenticators.find(({ publicKeyHex }) =>
    secp256k1.keyFromPublic(publicKeyHex, 'hex').verify(hash, sigObj)
  )
  if (!signer) {
    console.log(`Signaure object: ${sigObj}`)
    console.log(`Normilized data: ${data}`)
    console.log(`Digested data: ${hash}`)
    console.log(`Authenticators: ${authenticators}`)
    throw new Error('Signature invalid')
  }
  return signer
}

function isHex(str) {
  return /^[0-9a-fA-F]+$/.test(str) ? true : false
}

export default verifyDid

