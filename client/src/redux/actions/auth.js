import firebase from "firebase"
require("firebase/firebase-auth")

import { USER_STATE_CHANGED } from "../constants"

export const userAuthStateListener = () => dispatch => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            dispatch(getCurrentUserData())
        } else {
            dispatch({ type: USER_STATE_CHANGED, currentUser: null, loaded: true })
        }
    })
}

export const login = (email, password) => dispatch => new Promise((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            resolve()
        })
        .catch(() => {
            reject()
        })
})

export const register = (email, password) => dispatch => new Promise((resolve, reject) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            resolve()
        })
        .catch(() => {
            reject()
        })
})