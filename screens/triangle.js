import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Triangle extends Component {
  static navigationOptions = {
    title: 'Triangle'
  }
  render() {
    return (
      <View style = {styles.container}>
        <Text>Hello triangle!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})