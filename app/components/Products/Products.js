import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Alert, StatusBar } from 'react-native';
import ProductItemTeaser from './ProductItemTeaser';
import ProductData from '../../data/products';

export default class Products extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <FlatList
          data={ProductData}
          renderItem={({item}) => <ProductItemTeaser title={item.title} price={item.price} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
