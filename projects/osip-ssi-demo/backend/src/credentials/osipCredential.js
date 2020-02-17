import uuidv1 from 'uuid';
import EC from 'elliptic'
import { sha256 } from '../core/hash.js'

import parseJSONLD from '../core/jsonld.js'

const secp256k1 = new EC.ec('secp256k1')

let token = async (data, revocData) => {
  let date = new Date()
  let expirationDate = date
  expirationDate.setFullYear(date.getFullYear() + 1)

  let credential = {
    "@context": [
      "https://www.w3.org/2018/credentials/v1"
    ],
    id: `http://osip.vc/credentials/${uuidv1()}`,
    issuer:
      'did:7hirten:0x764a8cc33787d3e7bb5a71a4aee0cba9876dce5d',
    issuanceDate: date.toISOString(),
    type: ['VerifiableCredential', 'OsipCredential'],
    expirationDate: expirationDate.toISOString(),
    proof: {
      created: date.toISOString(),
      type: 'EcdsaKoblitzSignature2016',
      nonce: uuidv1(),
      creator:
        'did:7hirten:0x764a8cc33787d3e7bb5a71a4aee0cba9876dce5d',
    },
    credentialSubject: {
      "identifier": data.documentNumber,
      "id": data.id,
      "expiryDate": expirationDate.toISOString(),
      "issuer": "cosinex  GmbH (d-NRW)",
      "issuer city": "Bochum",
      "issuer zip code": "44801",
      "issuer address": "Konrad-Zuse-Str. 10",
      "issuer country": "Germany",
      "certifier surname": "Max",
      "certifier forename": "Sicherheitsmann",
      "certifier email": "max.sicherheitsmann@brd.nrw.de",
    }
  }

  const  { tbs } = await parseJSONLD(credential)
  let OsipPrivateKey = secp256k1.keyFromPrivate(process.env.ETH_PRIVATE_KEY, 'hex');

  let signature = secp256k1.sign(sha256(tbs), OsipPrivateKey)
  credential.proof.signatureValue = signature.r.toString('hex') + signature.s.toString('hex') + "0" + signature.recoveryParam

  return {
    "vp": {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
      ],
      "type": [
        "VerifiablePresentation"
      ],
      "verifiableCredential": [
        credential
      ]
    },
    "iss": "did:7hirten:0x764a8cc33787d3e7bb5a71a4aee0cba9876dce5d",
    "rd": {
      "factor": revocData.factor,
      "witness": revocData.witness
    }
  }
};

export default token;
