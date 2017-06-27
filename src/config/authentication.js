import firebase from 'firebase';
import firebaseAuth from './firebase';

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
