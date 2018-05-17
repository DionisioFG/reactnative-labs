import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class LogoTitle extends Component {
  render() {
    return (
        <Image
          resizeMode="contain"
          source={require('../assets/images/logo.png')}
          style={ this.props.style }
        />
    );
  }
}
