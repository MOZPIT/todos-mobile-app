import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

import { actionCreators } from './todoListRedux'

import Title from './Components/appHeader/appHeader';
import Footer from './Components/Footer/Footer';
import List from './Components/List/List';
import Input from './Components/Input/Input';

const mapStateToProps = (state) => ({
  todos: state.todos,
})

export default class App extends Component {
  onAddTodo = (text) => {
    const {dispatch} = this.props

    dispatch(actionCreators.add(index))
  }

  onRemoveTodo = (index) => {
    const {dispatch} = this.props

    dispatch(actionCreators.remove(index))
  }

  render() {
    const {todos} = this.props

    return(
      <View style={styles.container}>
         <Title>
            To Do List
        </Title>
         <Input
         placeholder={'Type a todo, then hit enter!'}
         onSubmitEditing={this.onAddTodo}
       />
       <List
         list={todos}
         onPressItem={this.onRemoveTodo}
       />
          <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
});

//export default connect(mapStateToProps)(App)
AppRegistry.registerComponent('App', () => App)
