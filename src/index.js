import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from './reducers';
import PatientPortalContainer from './containers/PatientPortalContainer';

import './styles/index.sass';

const initialState = {
  uiReducer: {
    alertMessage: null,
    leftSideComponent: null,
    leftSideData: {},
    rightSideComponent: null,
    rightSideData: {},
  }
};

const store = createStore(reducer, initialState, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
  <Provider store={store}>
    <PatientPortalContainer />
  </Provider>,

  document.getElementById('root')
);
