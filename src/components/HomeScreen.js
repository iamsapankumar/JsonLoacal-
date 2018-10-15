import React, { Component } from 'react'
import { View, Text , Button} from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import ElectronicScreen from './Electronic'
import BookScreen from './BookScreen'
import IndexScreen from './Index'


const AppNavigator = createStackNavigator({
    IndexScreen: IndexScreen,
    Book: BookScreen,
    Electronic: ElectronicScreen
}, {
    navigationOptions:{
        headerTitle: 'Shopping App',
        
    }
})



class HomeScreen extends Component {
    render() {
        return (
            <AppNavigator/>

           
        )
    }
}
export default HomeScreen