// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import Routes from './Routes';
import store from './store';
import './index.scss';


ReactDOM.render(
  <Provider store={ store } >
    <Routes history={ hashHistory } store={ store } />
  </Provider>,
  document.getElementById('app')
);
