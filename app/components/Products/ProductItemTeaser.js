import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default class ProductItemTeaser extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => Alert.alert('JA')}>
        <View style={ styles.rowContainer}>
          <View style={ styles.rowText }>
            <Text style={styles.title} numberOfLines={2} ellipsizeMode ={'tail'}>
              {this.props.title}
            </Text>
            <Text style={styles.price} numberOfLines={1} ellipsizeMode ={'tail'}>
              €{this.props.price}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: 100,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  title: {
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#777'
  },
  price: {
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 14,
    color: '#777'
  },
  thumbnail: {
    flex: 1,
    height: undefined,
    width: undefined
  },
  rowText: {
    flex: 4,
    flexDirection: 'column'
  }
});
