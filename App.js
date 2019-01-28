import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './src/components/LoginForm';
import Router from './src/Router';

class App extends Component {
    componentWillMount() {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyDuY93dFrPBEa_1yNiybSPHa0qnEb9tt0k",
            authDomain: "manager-cf1a1.firebaseapp.com",
            databaseURL: "https://manager-cf1a1.firebaseio.com",
            projectId: "manager-cf1a1",
            storageBucket: "manager-cf1a1.appspot.com",
            messagingSenderId: "423074976329"
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;