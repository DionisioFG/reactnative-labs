import React, { Component } from 'react';
import { Text } from 'react-native';
import { styles } from '../styles';

export default class TextWithPrefix extends Component {
  render() {
    return (
      <Text style={ styles.marginBottom }>
        <Text style={styles.boldText }>{ this.props.prefix }:</Text> { this.props.text }
      </Text>
    );
  }
}
