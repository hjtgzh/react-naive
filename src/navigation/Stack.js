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
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);
