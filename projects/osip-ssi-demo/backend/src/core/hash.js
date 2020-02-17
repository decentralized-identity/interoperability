import sha256js from 'js-sha256'
import jssha3 from 'js-sha3'

function sha256(payload) {
  return Buffer.from(sha256js.arrayBuffer(payload))
}

function keccak(data) {
  return Buffer.from(jssha3.keccak256.buffer(data))
}

export { sha256, keccak }
