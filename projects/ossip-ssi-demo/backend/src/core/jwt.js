import base64url from 'base64url'

export default function decodeJWT(jwt) {
  if (!jwt) throw new Error('no JWT passed')
  const parts = jwt.match(/^([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_-]+)$/)
  if (!parts) throw new Error('Incorrect format JWT')
  const header = JSON.parse(base64url.decode(parts[1]))
  const payload = JSON.parse(base64url.decode(parts[2]))
  const signature = parts[3]
  const data = `${parts[1]}.${parts[2]}`
  return { header, payload, signature, data }
}
