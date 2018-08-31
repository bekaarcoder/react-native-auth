import React, {Component} from 'react';
import { View, Text } from 'react-native';
import {Header, Button, Spinner, CardSection, Card} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: null
  };

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

    // check for users authentication
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({
          loggedIn: true
        });
      } else {
        this.setState({
          loggedIn: false
        });
      }
    })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View>
            <Card>
              <CardSection>
                <Button>Logout</Button>
              </CardSection>
            </Card>
          </View>
        );
      case false:
        return (
          <LoginForm />
        );
      default:
        return (
          <View>
            <Card>
              <CardSection>
                <Button>Logout</Button>
              </CardSection>
            </Card>
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;