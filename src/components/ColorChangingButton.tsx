import React, { PureComponent } from 'react'
import { StyleSheet, View, Picker, Text, Button } from 'react-native';

interface ButtonProps{
    whenPressed: ()=>void
    resetColorBtnPress: ()=>void
}

const Styles = StyleSheet.create({


})

class ResetColor extends React.PureComponent<ButtonProps>{
    render(){
        return(
            <View>
                <Button
                    color="black"
                    title={"Press me to reset color"}
                    onPress={this.props.whenPressed}
                />
                <Button
                    color="red"
                    title={"and me to reset text"}
                    onPress={this.props.resetColorBtnPress}
                />
            </View>
        )
    }
}

export default ResetColor;