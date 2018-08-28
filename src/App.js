import React, {Component} from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';

class App extends Component {
  componentDidMount() {
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
        <Text>New App</Text>
      </View>
    );
  }
}

export default App;