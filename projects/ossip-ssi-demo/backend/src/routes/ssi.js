import express from 'express'
import jwt from 'jsonwebtoken'

import { saveEid, getEidCredential } from '../db/db.js'
import osipCredential from '../credentials/osipCredential.js'
import verifyClient from './../stomp/stomp.js'
import decodeJWT from '../core/jwt.js'
import verifyDid from '../core/verification.js'

const router = express.Router()

const expectedCredentialResponseType = ["Credential", "EidCredential", "OsipCredential"]
const offeredCredentialType = ["Credential", "OsipCredential"]

router.post('/sendCredential', async function (req, res) {
  try {
    const {token} = req.body;
    const [_, payload] = token.split('.')
    const decodedJWTPayload = JSON.parse(Buffer.from(payload, 'base64').toString())

    let verifiableCredential = decodedJWTPayload.verifiableCredential || decodedJWTPayload.vp.verifiableCredential
    verifiableCredential = verifiableCredential[0]
    // TODO ENSURE Parse as if verifiable presentation
    const {type: presentedType} = verifiableCredential

    if (presentedType[1] === expectedCredentialResponseType[1]) {
      // TODO: Verify holder did
      // if (!verifyDid(decoded.credentialSubject.id)){
      //   res.status(500).send("Subject/Holder DID can not be verified");
      //   return;
      // }

      if (await verifyDid(verifiableCredential)){
        if (await saveEid(verifiableCredential)) {
          res.status(200).send("Credential was received, please wait till your claim is issued.");
        } else {
          res.status(500).send('No osip-request with a matching documentId found!');
        }
      } else {
        return res.status(500).send("Credential-Issuer DID can not be verified, read logs");
      }
    }
  } catch(e) {
    res.status(500).json({ error: e.message})
  }
});

router.post('/requestCredential', async function (req, res) {
  try {
    const { token } = req.body
    // const decoded = jwt.decode(token)
    const decoded = decodeJWT(token).payload

    const { interactionToken: { selectedCredentials } } = decoded

    /** TODO make sure if statement is correct / Check if osip is in the string instead of a strict equal? */
    if (selectedCredentials[0].type[1].toLowerCase().includes("osip")) {
      const result = await getEidCredential(decoded)

      if (result.eIdCredential) {
        const claimSection = result.eIdCredential.credentialSubject || result.eIdCredential.claim
        let revocData

        if (result.osipCredential.factor == null) {
          // GET REVOKEDATA
        } else {
          revocData = { "factor": result.osipCredential.factor, "witness": result.osipCredential.witness }
        }

        let credential = jwt.sign(await osipCredential(claimSection, revocData), process.env.OSIP_PRIVATE_KEY);
        res.json({ token: credential})

      } else {
        res.status(500).send("No osip-request found with matching criteria, please check if the osip-request was issued and you are using the correct 'iss' value in your request");
      }
    } else {
      return res.status(500).send(`Unknown credential type received, available: "${offeredCredentialType[1]}, Osip"`);
    }
  } catch(e) {
    console.log(e)
    res.status(500).json({ error: e.message})
  }
})

router.post('/verifyCredential', async function(req, res) {
  try {
    const {token} = req.body;
    const [_, payload] = token.split('.')
    const decodedJWTPayload = JSON.parse(Buffer.from(payload, 'base64').toString())


    let verifiableCredential = decodedJWTPayload.verifiableCredential || decodedJWTPayload.vp.verifiableCredential
    verifiableCredential = verifiableCredential[0]

    // TODO ENSURE Parse as if verifiable presentation
    const {type: presentedType} = verifiableCredential

    if (presentedType[1] === expectedCredentialResponseType[2]) {
      // TODO: Verify holder did
      // if (!verifyDid(decoded.credentialSubject.id)){
      //   res.status(500).send("Subject/Holder DID can not be verified");
      //   return;
      // }

      res.status(200).send("Credential received, verification in progress!");

      if (await verifyDid(verifiableCredential)){
        verifyClient(decodedJWTPayload.clientId, true);
      } else {
        verifyClient(decodedJWTPayload.clientId, false);
      }
    }
  } catch(e) {
    res.status(500).json({ error: e.message})
  }

});

export default router;
