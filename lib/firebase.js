'use strict';

import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyARkEYY3w5lTt_DdITrLhnXS_wQy_ljveQ',
  authDomain: 'shoot-the-breeze-99d6f.firebaseapp.com',
  databaseURL: 'https://shoot-the-breeze-99d6f.firebaseio.com',
  storageBucket: 'shoot-the-breeze-99d6f.appspot.com',
  messagingSenderId: '521622852584'
};

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export const signIn = () => auth.signInWithPopup(provider);
export const reference = firebase.database().ref('messages');
