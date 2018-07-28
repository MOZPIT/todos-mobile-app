import React, { Component } from 'react'
import { Alert, AppRegistry, View, Text, StyleSheet, TouchableHighlight } from 'react-native'

export default class Footer extends Component{
  _onPressButton(){
    Alert.alert('You tapped the footer button!')
  }
  render(){
    return(
      <View style={styles.footer}>
        <TouchableHighlight onPress={this._onPressButton}>
              <Text style={styles.footerText}>Remove Completed Items</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    flex: 2,
    marginTop: 620,
    height: 100,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  footerText: {
    color: 'red',
  },
})

AppRegistry.registerComponent('Footer', () => Footer);
