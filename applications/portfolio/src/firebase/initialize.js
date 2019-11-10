import * as firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from './firebase.config';

const fb = firebase.initializeApp(firebaseConfig);

export default fb;