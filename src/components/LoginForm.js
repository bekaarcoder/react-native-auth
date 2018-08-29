import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import {Card, CardSection, Button, Input} from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Input
              placeholder="username@email.com"
              label="Email"
              value={this.state.email}
              onChangeText={(email) => this.setState({email})}
            />
          </CardSection>
          <CardSection>
            <Input
              placeholder="Password"
              label="Password"
              value={this.state.password}
              onChangeText={(password) => this.setState({password})}
              secureTextEntry
            />
          </CardSection>
          <CardSection>
            <Button>Log In</Button>
          </CardSection>
        </Card>
      </View>
    )
  }
}

export default LoginForm;
