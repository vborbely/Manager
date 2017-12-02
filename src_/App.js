import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
//import LoginForm from './components/LoginForm';
import Router from "./Router";

class App extends Component {
  componentWillMount() {
    const config = {
        apiKey: 'AIzaSyDSv5JQY2rThcAEHEa2DWbuzoapMoA4GXk',
        authDomain: 'manager-ecd08.firebaseapp.com',
        databaseURL: 'https://manager-ecd08.firebaseio.com',
        projectId: 'manager-ecd08',
        storageBucket: '',
        messagingSenderId: '504086512271'
      };

      firebase.initializeApp(config);
  }


  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
         <Router />
      </Provider>
    );
  }
}

export default App;
