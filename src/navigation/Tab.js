import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Home from '../pages/Home/Home';
import Mine from '../pages/Mine/Mine';

export default TabNavigator(
  {
    Home: { screen: Home },
    Mine: { screen: Mine }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let label;
        if (routeName === 'Home') {
          label = '首页';
        } else if (routeName === 'Mine') {
          label = '我的';
        }
        return <Text>{label}</Text>;
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    },
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false
  }
);
