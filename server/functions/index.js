const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

exports.newUser = functions.auth.user().onCreate((user) => {
    // console.log("user: ", user, typeof (user))
    return db
        .collection("user")
        .doc(user.uid)
        .set({
            email: user.email,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        })
});