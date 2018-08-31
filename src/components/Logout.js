import React, { Component } from 'react';
import { View } from 'react-native';
import {Card, CardSection, Button} from './common';

class Logout extends Component {
  onButtonPress() {
    const firebase = require("firebase");
    firebase.auth().signOut()
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>Logout</Button>
          </CardSection>
        </Card>
      </View>
    )
  }
}

export default Logout;
