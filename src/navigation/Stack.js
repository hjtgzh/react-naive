import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Tab from './Tab';
import Home from '../pages/Home/Home';
import Mine from '../pages/Mine/Mine';
import Config from '../config';

const Color = Config.Color;
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
        backgroundColor: Color.navBg
      },
      headerTintColor: Color.white,
      headerTitleStyle: {
        textAlign: 'center',
        flexGrow: 1
      }
    }
  }
);
