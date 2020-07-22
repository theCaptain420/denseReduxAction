import React from 'react'
import { StyleSheet, View, Picker, Text, Button } from 'react-native';

interface MyProps{
    startValue:number
    faceValue:number
    whenIPressYou: ()=> void
}


const styles = StyleSheet.create({
    blueButton:{
        color:"blue"
    },
    myView:{
        alignItems:"center",

    }

})

class AmountPressed extends React.PureComponent<MyProps>{
    

    render(){
        return(
            <View style={styles.myView}>
                <Button
                color="lightblue"
                title={"Ive been pressed "+this.props.faceValue+" times"}
                onPress={this.props.whenIPressYou}
                >
                </Button>
            </View>
        )
    }
}

export default AmountPressed;
