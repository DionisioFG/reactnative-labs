import React, { Component } from 'react';
import { View, Button, AsyncStorage, Alert } from 'react-native';
import { Avatar, Text, Divider } from 'react-native-elements';
import TextWithPrefix from '../TextWithPrefix';
import { styles } from '../../styles';

export default class Profile extends Component {

  async saveItem() {
    const navigation = this.props.navigation; // offered by react-TabNavigator
    try {
      await AsyncStorage.setItem('id_token', '');
      navigation.navigate('UserTabs');
    }
    catch (error) {
      Alert.alert('AsyncStorage error: ' + error.message);
    }
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.centeredContainer }>
          <Avatar
            size="xlarge"
            rounded
            source={require('../../assets/images/dioni.jpg')}
          />
          <Text h4>Dioni</Text>
        </View>
        <Divider style={ styles.marginBottom } />
        <View style={ styles.mainContainer }>
          <TextWithPrefix prefix="First name" text="Dionisio" />
          <TextWithPrefix prefix="Last name" text="Fernández Gutiérrez" />
          <TextWithPrefix prefix="Address" text="Av. Lorem ipsum dolo" />
          <TextWithPrefix prefix="Country" text="Spain" />
          <TextWithPrefix prefix="City" text="Jerez de la Fra." />
          <TextWithPrefix prefix="Postal code" text="12345" />
          <TextWithPrefix prefix="Role" text="Fortune Drupal dev" />
        </View>
        <View style={ styles.centeredContainer }>
          <Button title="Log out" onPress={() => this.saveItem()}/>
        </View>
      </View>
    );
  }
}
