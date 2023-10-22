const {initializeApp} = require('firebase-admin/app');
const {getFirestore, FieldValue} = require('firebase-admin/firestore');
require('dotenv').config();

const firebaseConfig = {
    apiKey: 'AIzaSyBCrkAjcSxLsrzNEij2EoeAp5Yj6D1MejA' ,
    authDomain: "studied-slate-402702.firebaseapp.com",
    projectId: "studied-slate-402702",
    storageBucket: "studied-slate-402702.appspot.com",
    messagingSenderId: "340584920725",
    appId: "1:340584920725:web:790d703c730dbd2d820d9c"
};

initializeApp(firebaseConfig);
const db = getFirestore();

const getQuestion = async (question) =>  {
    const data = db.collection('questions').doc(question);
    const doc = await data.get();
    if (!doc.exists) {
        console.log("data doesn't exist");
    } else {
        return doc.data();
    }
}

/**
 * creates session in db with given id
 * @param session
 */
const createSession = async (session) =>  {
    const data = db.collection('sessions').doc(session);
    await data.set({
        user: []
    });
}

/**
 * creates user in db
 * @param userName name of user
 */
const createUser = async (userName) => {
    const data = db.collection('users').doc(userName);
    await data.set({
        stage: 0
    });
}

/**
 * given session and user, user is added to session
 * @param session reference to document in sessions collection that has the field users
 * @param user reference to document in users collection that has the field stage
 */
const joinSession = async (session, user) => {
    const data = db.collection('sessions').doc(session);
    const sessionExists = await data.get();
    if (!sessionExists) {
        console.log("session doesn't exist");
    } else {
        const userRef = db.collection('users').doc(user)
        await data.set({
            users: FieldValue.arrayUnion(userRef)
        })
    }
}

/**
 * increments a users stage
 * @param user
 * @returns {Promise<void>}
 */
const incrementStage = async (user)  => {
    const data = db.collection('users').doc(user);
    const userExists = await data.get();
    if (!userExists) {
        console.log("user doesn't exist");
    } else {
        await data.set({
            stage: FieldValue.increment(1)
        })
    }
}

/**
 * validates the given answer matches the correct answer in the db for a question
 * @param answer
 * @param question
 * @returns {Promise<boolean>}
 */
const validateAnswer = async (answer, question) => {
    const data = db.collection('questions').doc(question);
    const questionExists = await data.get();
    if (!questionExists) {
        console.log("question doesn't exist");
        return false;
    } else {
        return answer === questionExists.data().answer;
    }
}

/**
 * validates that a given key matches the validateKey in the db fro a question
 * @param key
 * @param question
 * @returns {Promise<boolean>}
 */
const validateKey = async (key, question) => {
    const data = db.collection('questions').doc(question);
    const questionExists = await data.get();
    if (!questionExists) {
        console.log("question doesn't exist");
        return false;
    } else {
        return key === questionExists.data().validateKey;
    }
}



export {
    getQuestion,
    createSession,
    createUser,
    joinSession,
    incrementStage,
    validateAnswer,
    validateKey
  };
  