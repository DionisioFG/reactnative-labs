import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import LogoTitle from './components/LogoTitle';

import Products from './components/Products/Products';
import Profile from './components/Users/Profile';
import Login from './components/Users/Login';
import RecoveringPass from './components/Users/RecoveringPass';

let screen = Dimensions.get('window');

export const UserTabs = createBottomTabNavigator(
  {
    'Login': {
      screen: Login,
      navigationOptions: {
        tabBarLabel: 'Login',
        tabBarIcon: ({ tintColor }) => <Icon name="login" type="entypo" size={28} color={tintColor} />
      },
    },
    'Recovering Password': {
      screen: RecoveringPass,
      navigationOptions: {
        tabBarLabel: 'Recovering Password',
        tabBarIcon: ({ tintColor }) => <Icon name="key" type="entypo" size={28} color={tintColor} />
      },
    },
  },
  {
    initialRouteName: 'Login'
  }
)

export const MainTabs = createBottomTabNavigator({
  'Products': {
    screen: Products,
    navigationOptions: {
      tabBarLabel: 'Products',
      tabBarIcon: ({ tintColor }) => <Icon name="list" type="entypo" size={28} color={tintColor} />
    },
  },
  'My Profile': {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-person-outline" type="ionicon" size={28} color={tintColor} />
    },
  },
});

export const RootNavigator = (signedIn = false) => {
  return createStackNavigator(
    {
      UserTabs: {
        screen: UserTabs,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      MainTabs: {
        screen: MainTabs,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      initialRouteName: signedIn ? 'MainTabs' : 'UserTabs',
      headerMode: 'none'
    }
  );
};
