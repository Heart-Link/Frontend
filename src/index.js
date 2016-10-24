import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';

import { reducer } from './reducers';
import PatientPortalContainer from './containers/PatientPortalContainer';

import LoginContainer from './containers/LoginContainer';

import InitialLoadService from './services/InitialLoadService';
const initialLoadService = new InitialLoadService();

import './styles/index.sass';

const initialState = {
  patientListReducer: {},
  uiReducer: {
    alertMessage: null,
    leftSideComponent: null,
    leftSideData: {},
    rightSideComponent: null,
    rightSideData: {},
  }
};

initialLoadService.getPatientList({ id: 'abc' }).then((response) => {
  initialState.patientListReducer = response.data;
  const store = createStore(
    reducer, 
    initialState, 
    compose( applyMiddleware(thunkMiddleware), window.devToolsExtension && window.devToolsExtension() )
  );

  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={LoginContainer} />
        <Route path='/patientportal' component={PatientPortalContainer} />
      </Router>
    </Provider>,

    document.getElementById('root')
  );

}).catch ((error) => {
  console.log(error);
});


