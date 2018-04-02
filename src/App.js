import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Stack from './navigation/Stack';

// 用于调试，开启后接口走浏览器的XHR
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

export default class App extends Component<Props> {
  render() {
    return <Stack />;
  }
}

const styles = StyleSheet.create({});
