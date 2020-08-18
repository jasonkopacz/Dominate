// Imports
import React from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { Provider } from 'react-redux'

// App Imports
import { store } from './store'
import Routes from './routes'
import App from '../App.js'

// App
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} key="provider">
        <Routes />
      </Provider>
    )
  }
}
