// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase";


const provider = new firebase.auth.FacebookAuthProvider();

export const logIn = () => dispatch => {
    
}

export const logoutFromFirebase = () => dispatch => {
    firebase.auth().signOut();
  };
  