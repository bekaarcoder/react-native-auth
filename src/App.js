import React, {Component} from 'react';
import { View, Text } from 'react-native';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    this.initializeFirebase();
  }

  initializeFirebase() {
    const firebase = require("firebase");
    let appConfig = {
      apiKey: "AIzaSyDnAY8GxE5lfksNBXTJjcZHxtxXddR3wXQ",
      authDomain: "expensify-80eb7.firebaseapp.com",
      databaseURL: "https://expensify-80eb7.firebaseio.com",
      projectId: "expensify-80eb7",
      storageBucket: "expensify-80eb7.appspot.com",
      messagingSenderId: "279094436178"
    };
    firebase.initializeApp(appConfig);
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;