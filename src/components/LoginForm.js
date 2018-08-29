import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import {Card, CardSection, Button} from './common';

class LoginForm extends Component {
  state = {
    text: ''
  };

  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <TextInput
              value={this.state.text}
              onChangeText={(text) => this.setState({text})}
            />
          </CardSection>
          <CardSection></CardSection>
          <CardSection>
            <Button>Log In</Button>
          </CardSection>
        </Card>
      </View>
    )
  }
}

export default LoginForm;
