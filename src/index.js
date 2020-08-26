import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCc8x38RDyO6Y2aI5mSOcEQ3rtVpEU5f-U",
  authDomain: "bake-react.firebaseapp.com",
  databaseURL: "https://bake-react.firebaseio.com",
  projectId: "bake-react",
  storageBucket: "bake-react.appspot.com",
  messagingSenderId: "444518669729",
  appId: "1:444518669729:web:56e3c3344a219e7c83ffe0",
  measurementId: "G-CTHW38Q4JG"
};

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
