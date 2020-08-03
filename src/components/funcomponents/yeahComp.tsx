import React from 'react'
import { View, Image, StyleSheet,Text } from 'react-native'


interface InputProps {
    visible: boolean
    text?: string
}
const Styles = StyleSheet.create({
    myFunText:{
        color:"green",
        fontWeight:"bold",
        fontSize:20,
        textTransform:"uppercase"
    }
})

export default function ({visible,text="not even giving me something to work with?" }: InputProps) {


    const MakingItRainOrNot = () => {
        if (visible) {
            return (
                <View>
                    <Text style={Styles.myFunText}>
                    {"<"}{text}{">"}
                    </Text>

                </View>
            )
        } else {
            return null
        }
    }

    return (
        <View>
            <MakingItRainOrNot></MakingItRainOrNot>
        </View>
    )

}
