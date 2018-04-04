import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Tab from './Tab';
import Home from '../pages/Home/Home';
import Mine from '../pages/Mine/Mine';

export default StackNavigator(
  {
    Home: {
      screen: Tab
    }
  },
  {
    // initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#2b68c2'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        textAlign: 'center',
        flexGrow: 1
      }
    }
  }
);
