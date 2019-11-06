import * as firebase from 'firebase/app';
import firebaseConfig from './firebase.config';

const fb = firebase.initializeApp(firebaseConfig);

export default fb;