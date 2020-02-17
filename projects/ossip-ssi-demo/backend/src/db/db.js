import MongoClient from 'mongodb';

const mongo = async function(){
    const client = await MongoClient.connect(process.env.DATABASE_URL, {useNewUrlParser: true });
    const db = client.db('osip');
    return db;
};

export const saveEid = async (decoded) => {
    const db = await mongo();

    // TODO REMOVE Currently Jolocom still uses "claim", this normalises the data
    const {claim, credentialSubject, ...sentCred} = decoded
    const normalizedCredential = {
      ...sentCred,
      credentialSubject: credentialSubject || claim
    }

    let response = await db
      .collection('Request')
      .updateOne(
        {
          id: normalizedCredential.credentialSubject.documentNumber,
          credential: null
        },
        {
          $set: {eIdCredential: decoded, "osipCredential.issued": false,}
        }
      );

      return response.result.n != 0
  }

export const getEidCredential = async (credentialRequest) => {
  const db = await mongo();

  const iss = credentialRequest.iss.includes('#') ? credentialRequest.iss.substring(0, credentialRequest.iss.indexOf('#')) : credentialRequest.iss

  let result = await db.collection('Request')
    .findOneAndUpdate({
      $or: [{"eIdCredential.claim.id": iss}, {"eIdCredential.credentialSubject.id": iss}],
      "osipCredential.issued": true,
      // "osipCredential.delivered": {$in: [null, false]}
    }, {$set: {"osipCredential.delivered": true}});

  if (result.value === null) {
    return false
  } else {
    return result.value
  }
}

export default mongo
