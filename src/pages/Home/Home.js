import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    console.log(navigationOptions);
    return {
      title: 'Home'
    };
  };
  render() {
    return (
      <View>
        <Text>首页</Text>
        <Button
          title="我的"
          onPress={() => {
            this.props.navigation.navigate('Mine');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
