import React, { Component } from 'react'
import { View, Text } from 'react-native'
import  {electronic}  from '../api/data'
import Custom from '../customComponent/Custom'

class ElectronicScreen extends Component {
    render() {
        return (
            <View>
               <Custom products ={electronic}/>
            </View>
        )
    }
}
export default ElectronicScreen