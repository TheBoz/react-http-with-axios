import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// Axios supports setting default values
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// Axios supports global interceptors
// The request is useful for adding headers, etc... to every request
axios.interceptors.request.use(request => {
  console.log(request);
  // Edit the request config
  return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
  });

  // The response is rarely used, but available as needed
axios.interceptors.response.use(response => {
  return response;
}, error => {
  return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
