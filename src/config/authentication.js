import firebase from 'firebase';
import { ref, firebaseAuth } from './firebase';


export function logout() {
  return firebaseAuth().signOut();
}

export function login() {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
}

export function saveUser(user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user);
}
