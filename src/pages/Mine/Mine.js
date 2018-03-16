import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Mine extends Component {
  static navigationOptions = {
    title: 'Mine'
  };
  render() {
    return (
      <View>
        <Text>我的</Text>
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
