import React, { Component } from 'react'
import { View, Text} from 'react-native'

class Custom extends Component {
    renderCustom = products =>{
        return products.map((item, index)=>{
            return<View key={index}>
            <Text>{item.id}{item.name}{item.price}</Text>

            </View>
        })
    }
    render(){
        return(
            <View>
                {this.renderCustom(this.props.products)}
            </View>

        );
    }
}
export default Custom
