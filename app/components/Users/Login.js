import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
  Button,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

import { Input } from 'react-native-elements';

import LogoTitle from '../LogoTitle';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  // this function save a toke in a asynchronous way.
  async saveItem(item, selectedValue) {
    const navigation = this.props.navigation;
    try {
      await AsyncStorage.setItem(item, selectedValue);
      navigation.navigate('MainTabs');
    }
    catch (error) {
      Alert.alert('AsyncStorage error: ' + error.message);
    }
  }

  // this function performs validations before save the content.
  userLogin() {
    if (!this.state.email || !this.state.password) {
      Alert.alert('Email or password is empty');
      return;
    }

    if ((this.state.email != 'dioni') || (this.state.password != 'welovehlt')) {
      Alert.alert('Email or password not valid, please try again');
      return;
    }

    this.saveItem('id_token', "8716439277"); // test tok

  }
  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.loginContainer }>
          <LogoTitle style={styles.logo} />
        </View>
        <View>
            <TextInput style = {styles.input}
               autoCapitalize="none"
               autoCorrect={false}
               keyboardType='email-address'
               placeholder='Email'
               placeholderTextColor='rgba(225,225,225,0.7)'
               value={this.state.email}
               onChangeText={(text) => this.setState({email: text})}
              />

            <TextInput style = {styles.input}
              placeholder='Password'
              placeholderTextColor='rgba(225,225,225,0.7)'
              value={this.state.password}
              onChangeText={(text) => this.setState({password: text})}
              secureTextEntry
            />

            <Button onPress={() => this.userLogin()} title="Log in"/>
        </View>
      </View>
    );
  }
}

// defining styles for login form
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#415968',
    padding: 20
  },
  logo: {
    position: 'absolute',
    width: 300,
    height: 100
  },
  loginContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  input:{
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 10,
    color: '#fff'
  },
  buttonContainer:{
    backgroundColor: '#2980b6',
    paddingVertical: 15
  },
  buttonText:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  }
});
