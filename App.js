import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './src/reducers'
import firebase from 'firebase'
import firebaseConfig from './firebase'
import LoginForm from './src/components/LoginForm'

class App extends Component {
  componentDidMount() {
      firebase.initializeApp(firebaseConfig)
  }
  render() {
    const store = createStore(reducers, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App
