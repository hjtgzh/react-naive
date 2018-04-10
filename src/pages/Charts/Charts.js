import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Charts extends Component {
  static navigationOptions = {
    title: 'Charts'
  };
  render() {
    return (
      <View>
        <Text>图表</Text>
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
