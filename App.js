import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/reducers'
import firebase from 'firebase'
import firebaseConfig from './firebase'
import LoginForm from './src/components/LoginForm'

class App extends Component {
  componentDidMount() {
      firebase.initializeApp(firebaseConfig)
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App
