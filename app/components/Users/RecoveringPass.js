import React, { Component } from 'react';
import { TextInput, Button, StyleSheet, Text, View, Image } from 'react-native';

export default class RecoveringPass extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.loginContainer }>
          <Image resizeMode="contain" style={styles.logo} source={require('../../assets/images/logo.png')} />
        </View>
        <View style={{ padding:20 }}>
          <TextInput style = {styles.input}
             autoCapitalize="none"
             autoCorrect={false}
             keyboardType='email-address'
             placeholder='Type your email'
             placeholderTextColor='rgba(225,225,225,0.7)'
          />
          <Button title="Recovering Password"/>
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
  },
  loginContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    position: 'absolute',
    width: 300,
    height: 100
  }
});
