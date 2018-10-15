import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import ItemDetail from './ItemDetail'
import Feed from './Feed'


const Navigator = createStackNavigator({
    Feed: Feed,
    ItemDetail: ItemDetail
})

class Nav extends Component {
    render() {
        return (
            <Navigator />
        )
    }
}
export default Nav