import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import Title from './Components/appHeader/appHeader';
import Footer from './Components/Footer/Footer';

export default class App extends React.Component {
  render() {
    return(
      <View style={styles.container}>
          <Title />
          <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

AppRegistry.registerComponent('App', () => App)
