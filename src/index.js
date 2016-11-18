import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';

import { reducer } from './reducers';
import PatientPortalContainer from './containers/PatientPortalContainer';
import LoginContainer from './containers/LoginContainer';

import './styles/index.sass';

const initialState = {
  patientListReducer: [],
  userInfoReducer: {
    isAuthorized: false,
    isDoctor: null,
    jwt: null,
    providerID: null,
    userName: null
  },
  uiReducer: {
    alertMessage: null,
    leftSideComponent: null,
    leftSideData: {},
    rightSideComponent: null,
    rightSideData: {},
    showFlagged: false,
    messageList: []
  }
};

var store = createStore(
  reducer, 
  initialState, 
  compose( applyMiddleware(thunkMiddleware), window.devToolsExtension && window.devToolsExtension() )
);

const requireAuth = () => {
  if (!store.getState().userInfoReducer.isAuthorized) return false;

  return true;
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={LoginContainer} />
      <Route path='/patientPortal' component={PatientPortalContainer} onEnter={requireAuth}/>
    </Router>
  </Provider>,

  document.getElementById('root')
);
