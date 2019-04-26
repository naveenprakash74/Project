import firebase from 'firebase';
import keys from '../keys/APIKeys';

let config = {
    apiKey: keys.firebase.apiKey,
    authDomain: keys.firebase.authDomain,
    databaseURL: keys.firebase.databaseURL,
    projectId: keys.firebase.projectId,
    storageBucket: keys.firebase.storageBucket,
    messagingSenderId: keys.firebase.messagingSenderId
};
let Firebase = firebase.initializeApp(config);
export default Firebase;


