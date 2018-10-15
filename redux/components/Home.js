import React, { Component } from 'react'
import { View, Text , Button} from 'react-native'

class Home extends Component{
    render(){
        return(
            <View style={{padding:20}}>
                <Button title='Feed' onPress={()=>this.props.navigation.navigate('Feed')}/>
                <View style={{padding:20}}>
                <Button title='ItemDetail' onPress={()=>this.props.navigation.navigate('ItemDetail')}/>
                </View>
                

                

   
            </View>
        );
    }
}
export default Home