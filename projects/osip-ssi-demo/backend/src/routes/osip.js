import express from 'express';
var router = express.Router();
import mongo from '../db/db.js';

router.post('/postForm', async function(req, res, next) {
  let osipRequest = req.body;
  let date = new Date()
  const db = await mongo();
  osipRequest.created = date.getTime()
  osipRequest.osipCredential = { issued: false}
  await db.collection('Request').insertOne(osipRequest);
  res.status(200).send("form received")
});

router.get('/credentialRecords', async function(req, res, next) {
  const db = await mongo();
  const cursor = db.collection('Request').find({}).sort({ created: -1 });
  cursor.toArray(async function(err, doc) {
    if(doc){
      res.json(doc)
    } else {
      res.status(500).send("Custom Error");
    }
  });
});

router.post('/issueClaim', async function(req, res, next) {
  let { id, type, decline }= req.body;
  const db = await mongo();
  const cursor = db.collection('Request').find({id: id, "osipCredential.issued": false, eIdCredential: { $exists: true } });

  return cursor.next(function(err, doc) {
    if (doc !== null) {
      if (decline) {
        db.collection('Request').update({_id: doc._id},{$set:{ "osipCredential.declined": true}});
        res.json({ message: "Claim issued" })
      } else {
        db.collection('Request').update({_id: doc._id},{$set:{ "osipCredential.issued": true}});
        res.json({ message: "Claim issued" })
      }
    } else {
      res.status(404).send("Claim not found")
    }
  });
});


export default router;
