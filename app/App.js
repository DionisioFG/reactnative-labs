/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { ActivityIndicator, AsyncStorage, StyleSheet, Text, View, Alert } from 'react-native';
import { RootNavigator } from './navigator';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      hasToken: false, // user token
      isLoaded: false // state to know if the class is rendered
    };
  }

  // This method will be executed once the component is mounted,
  // so it is useful if you want to retrieve some data before render it.
  componentDidMount() {
    AsyncStorage.getItem('id_token').then((token) => {
      this.setState({ hasToken: token !== null, isLoaded: true })
    });
  }

  render() {
    const Layout = RootNavigator(this.state.hasToken);
    if (!this.state.isLoaded) {
      return <ActivityIndicator />;
    }
    else {
      return <Layout />
    }
  }
}
