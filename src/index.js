import React, {useContext, createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
  apiKey: "AIzaSyAqNmNUUuDGYrCCtRvLVxjsB2_xeGEqEP0",
  authDomain: "chat-react-742bd.firebaseapp.com",
  projectId: "chat-react-742bd",
  storageBucket: "chat-react-742bd.appspot.com",
  messagingSenderId: "39584229996",
  appId: "1:39584229996:web:ab4d472d03f712e5c80649",
  measurementId: "G-XY1MN3ZLEE"
})

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


const root = document.getElementById('root')

ReactDOM.render(
  <Context.Provider value={{
    firebase, 
    auth, 
    firestore
  }}>
    <App />
  </Context.Provider>,
  root
);