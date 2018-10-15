import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { book } from '../api/data'
import Custom from '../customComponent/Custom'

class BookScreen extends Component {
    render() {
        return (
            <View>
                <Custom products ={book}/>
                
            </View>
        )
    }
}
export default BookScreen