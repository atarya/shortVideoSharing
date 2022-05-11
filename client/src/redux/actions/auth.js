import firebase from "firebase"
require("firebase/firebase-auth")
import { useDispatch, useSelector } from "react-redux";

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


export const getCurrentUserData = () => dispatch => {


    firebase.firestore()
        .collection("user")
        .doc(firebase.auth().currentUser.uid)
        .onSnapshot((res) => {
            if (res) {
                return dispatch({
                    type: USER_STATE_CHANGED,
                    currentUser: res.data(),
                    loaded: true
                })
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