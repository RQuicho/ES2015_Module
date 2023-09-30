import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import fruits from './foods';
import { Choice, Remove } from './helpers';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

let fruit = Choice(fruits);
console.log(`I'd like one ${fruit}, please.`);
console.log(`Here you go: ${fruit}`);
console.log('Delicious! May I have another?');

let remainingNumFruits = Remove(fruits, fruit);
console.log(`I'm sorry, we're all out. We have ${remainingNumFruits.length} left.`)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
