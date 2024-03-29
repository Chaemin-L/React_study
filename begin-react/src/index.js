import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';  // 1.1~1.6
import App from './App_2';  // 1.7~
//import Counter from './Counter_2';  // 1.24
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
