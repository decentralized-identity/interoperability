import jsonld from'jsonld'
import { sha256 } from '../core/hash.js'

async function normalize(document, signatureOptions = {}) {
  if (!document) throw new Error('Document not provided')

  const canonizedDocument = await jsonld.canonize(document)

  const options = {
    ...signatureOptions,
    ['@context']: [
      // ...(signatureOptions['@context'] ? signatureOptions['@context'] : []),
      {
        id: '@id',
        type: '@type',
        schema: 'http://schema.org/',
        xsd: 'http://www.w3.org/2001/XMLSchema#',
        sec: 'https://w3id.org/security#',
        dc: 'http://purl.org/dc/terms/',
        EcdsaKoblitzSignature2016: 'sec:EcdsaKoblitzSignature2016',
        created: { '@id': 'dc:created', '@type': 'xsd:dateTime' },
        creator: { '@id': 'dc:creator', '@type': '@id' },
        domain: 'sec:domain',
        nonce: 'sec:nonce',
        signatureValue: 'sec:signatureValue'
      }
    ]
  }
  delete options.signatureValue
  delete options.type
  delete options.id

  const canonizedOptions = await jsonld.canonize({
    ...options,
    ...(!options.created ? { created: new Date().toISOString()} : {}),
  })

  return {
    canonizedDocument,
    canonizedOptions,
  }
}

async function digest(canonizedDocument, canonizedOptions) {
  if (!canonizedDocument) throw new Error('Canonized document not provided')
  if (!canonizedOptions) throw new Error('Canonized options not provided')

  const canonizedDocumentDigest = sha256(Buffer.from(canonizedDocument))
  const canonizedOptionsDigest = sha256(Buffer.from(canonizedOptions))

  return Buffer.concat([
    Buffer.from(canonizedOptionsDigest),
    Buffer.from(canonizedDocumentDigest)
  ])
}

export default async function parseJSONLD (jsonld) {
  const { proof, ...document } = jsonld
  if (!document) throw new Error('Missing jsonld document')
  if (!proof) throw new Error('Missing jsonld proof')
  if (!proof.created) throw new Error('Missing jsonld proof creation date')
  const { canonizedDocument, canonizedOptions } = await normalize(document, proof)
  const tbs = await digest(canonizedDocument, canonizedOptions)
  return { document, proof, tbs }
}

// const DEFAULT_SIGNATURE_SUITE = 'EcdsaKoblitzSignature2016'
// const signatureOptions = {
//   type: sigOptions.type || DEFAULT_SIGNATURE_SUITE,
//   creator: sigOptions.creator || issuer,
//   created: new Date().toISOString(),
//   nonce: sigOptions.nonce || uuidv1(),
//   domain: sigOptions.domain || 'example.com'
// }
