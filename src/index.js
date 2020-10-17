import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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


// API Key (v3 auth)
// a5c16ac440d7c3c88189cb397aac555c

// Example API Request
// https://api.themoviedb.org/3/movie/550?api_key=a5c16ac440d7c3c88189cb397aac555c

// API Read Access Token (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWMxNmFjNDQwZDdjM2M4ODE4OWNiMzk3YWFjNTU1YyIsInN1YiI6IjVmODY5MzFiYTE5OWE2MDAzNmRlNmVlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LT61cwhpi8ukiFE90ily8PHHnSVq03CP5DZKxdpYD8c