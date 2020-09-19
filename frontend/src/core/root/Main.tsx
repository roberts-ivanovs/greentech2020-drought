import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';
import { About } from 'core/about/About';
import { Home } from 'core/home/Home';
import { Data } from 'core/data/Data';

export function Main(): React.ReactElement {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/data">
        <Data />
      </Route>
    </Switch>
  );
}
