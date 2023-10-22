import { initializeApp } from 'firebase/app';
import { getFirestore, FieldValue } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBCrkAjcSxLsrzNEij2EoeAp5Yj6D1MejA",
    authDomain: "studied-slate-402702.firebaseapp.com",
    projectId: "studied-slate-402702",
    storageBucket: "studied-slate-402702.appspot.com",
    messagingSenderId: "340584920725",
    appId: "1:340584920725:web:790d703c730dbd2d820d9c"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getQuestion = async (question) => {
  const data = db.collection('questions').doc(question);
  const doc = await data.get();
  if (!doc.exists) {
    console.log("data doesn't exist");
  } else {
    return doc.data();
  }
};

const createSession = async (session) => {
  const data = db.collection('sessions').doc(session);
  await data.set({
    user: [],
  });
};

const createUser = async (userName) => {
  const data = db.collection('users').doc(userName);
  await data.set({
    stage: 0,
  });
};

const joinSession = async (session, user) => {
  const data = db.collection('sessions').doc(session);
  const sessionExists = await data.get();
  if (!sessionExists) {
    console.log("session doesn't exist");
  } else {
    const userRef = db.collection('users').doc(user);
    await data.set({
      users: FieldValue.arrayUnion(userRef),
    });
  }
};

const incrementStage = async (user) => {
  const data = db.collection('users').doc(user);
  const userExists = await data.get();
  if (!userExists) {
    console.log("user doesn't exist");
  } else {
    await data.set({
      stage: FieldValue.increment(1),
    });
  }
};

const validateAnswer = async (answer, question) => {
  const data = db.collection('questions').doc(question);
  const questionExists = await data.get();
  if (!questionExists) {
    console.log("question doesn't exist");
    return false;
  } else {
    return answer === questionExists.data().answer;
  }
};

const validateKey = async (key, question) => {
  const data = db.collection('questions').doc(question);
  const questionExists = await data.get();
  if (!questionExists) {
    console.log("question doesn't exist");
    return false;
  } else {
    return key === questionExists.data().validateKey;
  }
};

export {
  getQuestion,
  createSession,
  createUser,
  joinSession,
  incrementStage,
  validateAnswer,
  validateKey
};
