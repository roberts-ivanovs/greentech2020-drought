// import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'App';
import * as serviceWorker from 'serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root'),
);

// Learn more about service workers: https://bit.ly/CRA-PWA
// unregister() to register() below. Note this comes with some pitfalls.
// If you want your app to work offline and load faster, you can change
serviceWorker.unregister();
