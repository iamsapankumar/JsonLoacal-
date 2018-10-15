import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { feed } from './data'
import Custom from './Custom' 



class Feed extends Component {
    render() {
        return (
            <View>
               <Custom products ={feed}/>
             
            </View>

        );
    }
}
export default Feed