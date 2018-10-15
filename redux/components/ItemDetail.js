import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { ItemD } from './data'
import Custom from './Custom'

class ItemDetail extends Component {
    render() {
        return (
            <View>
                <Custom products ={ItemD}/>
            </View>

        );
    }
}
export default ItemDetail