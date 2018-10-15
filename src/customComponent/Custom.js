import React, { Component } from 'react'
import { View, Text } from 'react-native'


class Custom extends Component {
    renderApp = (products)=>{
        return products.map((item, index)=>{
            return<View key={index}>
                <Text style={{color:'red', fontSize:25}}>{item.id}-{item.name}-{item.price}</Text>
            </View>
        })
    }
    render(){
        return(
            <View>
            {this.renderApp(this.props.products)}
            </View>
            

        )
    }
}

export default Custom