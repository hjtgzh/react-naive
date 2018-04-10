import React from 'react';
// import { Colors, Size } from '../config';
import { px } from '../config/size';
import { View, Text, StyleSheet } from 'react-native';

const cssStyles = StyleSheet.create({
  icon: {
    textAlign: 'center',
    fontSize: px(50),
    fontFamily: 'iconfont'
  },
  text: {
    fontSize: px(22)
  },
  view: {
    alignItems: 'center'
  }
});
export default class TabLabel extends React.PureComponent {
  render() {
    const { label, icon, color } = this.props;

    return (
      <View style={cssStyles.view}>
        <Text style={[cssStyles.icon, { color }]}>{icon}</Text>
        <Text style={[cssStyles.text, { color }]}>{label}</Text>
      </View>
    );
  }
}
