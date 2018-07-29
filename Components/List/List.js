import React, { Component } from 'react'
import {AppRegistry, ScrollView, StyleSheet} from 'react-native'

export default class List extends Component{
  render(){
    return(
      <ScrollView style={styles.container}>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flex:1,
  }
});

AppRegistry.registerComponent("List", () => List);
