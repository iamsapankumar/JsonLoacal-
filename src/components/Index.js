import React, { Component } from 'react'
import { View, Text , Button} from 'react-native'

class IndexScreen extends Component {
    render() {
        return (
            <View>
                 <View style={{ padding: 30}}>
                 <Button title="Book" onPress={()=> this.props.navigation.navigate('Book')}/>
                 </View>
                 <View style={{ padding: 30}}>
                 <Button title="Electronic" onPress={()=> this.props.navigation.navigate('Electronic')}/>
                 </View>
            </View>
        )
    }
}
export default IndexScreen