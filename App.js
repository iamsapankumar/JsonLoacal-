import React, { Component } from 'react'
import { View, Text } from 'react-native'
import HomeScreen from './src/components/HomeScreen'
// import Nav from './redux/components/Nav'
// import store from './redux/store/store'
// import { Provider } from 'react-redux'
//import Navi from './basic/components/Navi'
//import IndexScreen from './src/components/Index'
import Nav from './redux/components/Nav'

export default class App extends Component {
  render() {
    return (
    <Nav/>
    )
  }

}