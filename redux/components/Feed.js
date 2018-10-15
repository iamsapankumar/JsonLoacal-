import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'


class Feed extends Component {
    render() {
        return (
            <View>
                <Text>Feed</Text>
                <Button onPress={()=> this.props.navigation.navigate('ItemDetail')} title="Item"/>
            </View>

        );
    }
}
export default Feed