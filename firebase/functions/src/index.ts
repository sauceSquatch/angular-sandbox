import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// import { DocumentSnapshot } from 'firebase-functions/lib/providers/firestore';

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

// const gcs = require('@google-cloud/storage')();
// const path = require('path');

// exports.uploadHandler = functions.storage.object().onFinalize(async (object) => {
//     console.log("a file was uploaded")

//     // if (object.contentType !== 'text/csv') {
//     //     console.log('This is not a CSV file.');
//     //     return null;
//     // }

//     // bucket.file(filename).download((err, contents) => {
//     //     if (err) {
//     //         console.log('error', err);
//     //         return null
//     //     }

//     //     toJSON(contents.toString());
//     // });
// });
 
  // const responseObj: { [key: string]: any } = {};

export const getMarketingData = functions.https.onRequest( (request, response) => {

  console.log('siteId: ', request.query.siteId);
  console.log('id: ', request.query.userId);
  let usersRef = db.collection(`${request.query.siteId}`)
                    .doc(`${request.query.userId}`);

  // let usersRef = db.collection(`${request.query.siteId}`)
  //                   .doc('users');

  if(request.query.siteId != "" && request.query.siteId != undefined && request.query.userId != undefined || request.query.userId != "") {
    usersRef.get()
    .then( doc => {
      
      console.log(doc.data())
      
      if(!doc.exists) {
        response.send('there is no record');
      } else {
        console.log('document data: ', doc.data())
        response.send(JSON.stringify(doc.data()));
      }

    })
    .catch(err => {
      console.log('Error getting document', err);
      response.send(err);
    });;
  } else {
    response.send("invalid parameters");
  }
  
})

export const getMarketingData2 = functions.https.onRequest( (request, response) => {

  console.log('siteId: ', request.query.siteId);
  console.log('userId: ', request.query.userId);
  // let usersRef = db.collection(`${request.query.siteId}`)
  //                   .doc(`${request.query.userId}`);

  // let usersRef = db.collection(`${request.query.siteId}`)
  //                   .doc('users');

  let responseObj: { [key: string]: any } = {}

  responseObj.marketingData = {
    dynamicOfferContent: {
      isActive: false
    },
    servicingOfferContent: {
      isActive: false
    }
  }


  if(request.query.siteId != "" && request.query.siteId != undefined && request.query.userId != undefined || request.query.userId != "") {
    try {
      // Try Dynamic Offers
      db.collection(`${request.query.siteId}/${request.query.userId}/dynamicOffers`)
        .get()
        .then( (snap) => {
          console.log("snap.docs: ", snap.docs);
          snap.docs.map(doc => {
            console.log(doc.id);
            console.log(doc.data());
            // Object.defineProperty(responseObj, doc.id, { value: doc.data() });
            responseObj.marketingData.dynamicOfferContent[`${doc.id}`] = doc.data();
            console.log(responseObj)
            // buidResponse(responseObj, doc)
            responseObj.marketingData.dynamicOfferContent['isActive'] = true;
          })
          response.send(responseObj);
        })
        .catch(error => {
          responseObj.marketingData.dynamicOfferContent['isActive'] = false;
          response.send(responseObj);
        });;

      // db.collection(`${request.query.siteId}/${request.query.userId}/servicingOffers`)
      //   .get()
      //   .then( (snap) => {
      //     console.log("snap.docs: ", snap.docs);
      //     snap.docs.map(doc => {
      //       responseObj.servicingOffers[`${doc.id}`] = doc.data();
      //     })
      //   })
      //   .catch(error => {
      //     responseObj.servicingOffers['isActive'] = false;
      //   });


    }
    catch (error) {
      console.log(error);
      response.status(500).send(error);
    }
  } else {
    response.send("invalid parameters");
  }
  
})

// if(request.query.userId != undefined && request.query.siteId != undefined && request.query.offer != undefined) {
    
    
  //   // we have the parameters we need to make a DB query
  //   // let usersRef = db.collection('users').doc(`${request.query.userId}/${request.query.siteId}/`);
  //   // console.log(`${request.query.userId}/${request.query.siteId}`);
  //   // usersRef.get()
  //   // .then(doc => {
  //   //   if (!doc.exists) {
  //   //     console.log('No such document!');
  //   //   } else {
  //   //     console.log('Document data:', doc.data());
  //   //     response.send(JSON.stringify(doc.data()))
  //   //   }
  //   // })
  //   // .catch(err => {
  //   //   console.log('Error getting document', err);
  //   //   response.send(err);
  //   // });

  // } else {
  //   response.send("ERROR: missing required parameters, id, siteId and offer data needed")
  // }