import React, { Component } from 'react'
import { AppRegistry, Text, StyleSheet, View } from 'react-native'

export default class appHedaer extends Component{
    render() {
        return(
          <View style={styles.header}>
            <Text style={styles.title}>My Todo List</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'steelblue',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  title: {
    marginTop:40,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

AppRegistry.registerComponent('appHeader', () => appHeader)
