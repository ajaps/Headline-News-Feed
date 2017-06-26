import firebase from 'firebase';
import { ref, firebaseAuth } from './firebase';

/**
 * logs out from firebase
 * @return {function}
 */
export function logout() {
  return firebaseAuth().signOut();
}

/**
 * logs into firebase
 * @param {string} providerName The selected authentication provider
 * @return {function}
 */
export function login(providerName) {
  let provider;
  if (providerName === 'google+') {
    provider = new firebase.auth.GoogleAuthProvider();
  } else {
    provider = new firebase.auth.GithubAuthProvider();
  }

  return firebase.auth().signInWithPopup(provider);
}

/**
 * logs into firebase
 * @param {object} user The users information
 * @return {function}
 */
export function saveUser(user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user);
}
