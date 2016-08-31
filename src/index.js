import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from './reducers';
import PatientPortalContainer from './containers/PatientPortalContainer';

import './styles/index.sass';

const initialState = {
  uiReducer: {
    rightSide: false
  }
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <PatientPortalContainer />
  </Provider>,

  document.getElementById('root')
);
