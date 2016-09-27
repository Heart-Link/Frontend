import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from './reducers';
import PatientPortalContainer from './containers/PatientPortalContainer';

import InitialLoadService from './services/InitialLoadService';
const initialLoadService = new InitialLoadService();

import './styles/index.sass';



const initialState = {
  patientListReducer: {
  },
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
  const store = createStore(reducer, initialState, window.devToolsExtension && window.devToolsExtension());

  ReactDOM.render(
    <Provider store={store}>
      <PatientPortalContainer />
    </Provider>,

    document.getElementById('root')
  );

}).catch ((error) => {
  console.log(error);
});


