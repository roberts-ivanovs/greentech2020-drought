import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'App';
import * as serviceWorker from 'serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

const rust = import('rust');

rust
  .then((m) => {
    ReactDOM.render(
      <Router>
        <React.StrictMode>
          <App wasm={m} />
        </React.StrictMode>
      </Router>,
      document.getElementById('root'),
    );
  })
  .catch((e) => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    console.log(`Something went wrong when fetching wasm!\n${e}`);
  });

// Learn more about service workers: https://bit.ly/CRA-PWA
// unregister() to register() below. Note this comes with some pitfalls.
// If you want your app to work offline and load faster, you can change
serviceWorker.unregister();
