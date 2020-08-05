import React, { PureComponent } from 'react'
import { StyleSheet, View, Picker, Text, Button } from 'react-native';

interface ButtonProps{
    whenPressed: ()=>void
}

const Styles = StyleSheet.create({


})

class ResetColor extends React.PureComponent<ButtonProps>{
    render(){
        return(
            <View>
                <Button
                    color="red"
                    title={"Press me to reset"}
                    onPress={this.props.whenPressed}
                />
            </View>
        )
    }
}

export default ResetColor;