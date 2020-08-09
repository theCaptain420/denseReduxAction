import React from 'react'
import {View,Text} from 'react-native'

interface MyProps{
    whenPressed:(articleNumber:number)=>void;
    theID:number;
    writer:string
}

class WhoWroteTheArticle extends React.PureComponent<MyProps>{



    render(){
        return(
            <View>
                <Text style={{textAlign:"center"}} onPress={()=> {this.props.whenPressed(this.props.theID)}}>
                    {this.props.writer}
                </Text>
            </View>
        )
    }
}

export default WhoWroteTheArticle;