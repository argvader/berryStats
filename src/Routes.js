// @flow
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './components/App';
import Content from './components/Content';

type Props = {
  history: any
}

const Routes = (props: Props) => (
  <Router { ...props }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Content } />
    </Route>
  </Router>
);

export default Routes;
