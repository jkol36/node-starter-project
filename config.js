import firebaseAdmin from 'firebase-admin'
global.Promise = require('bluebird')

const serviceAccount = require('./serviceAccount.json')

export const firebase = firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: "https://ticketlynx-5a17f.firebaseio.com"

})

export const onSaleRef = firebase.database().ref('onSale')
//create a firebase ref that serves as a signaling tool for the scrapers to run
export const signalingRef = firebase.database().ref('signalingRef')