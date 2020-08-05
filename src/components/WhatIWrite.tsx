import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native';
import YeahComp from './funcomponents/yeahComp'

interface MyProps {
    textValue: string
    whenIWrite: (newString: string) => void
    textColor: string,
    showVapeNation:boolean
}


const styles = StyleSheet.create({
    myView: {
        alignItems: "center",
    },
    myTextInput: {
        borderColor: "lightblue",
        borderBottomWidth: 2,
        paddingVertical:0,
        width:"90%",
        marginBottom:10
    },
    myTitleOfInput: {
        marginTop:7,
        fontSize:20,
        fontWeight:"bold",
        
    }


})

class WhatIWrite extends React.PureComponent<MyProps>{
   

    render() {
        return (
            <View style={styles.myView}>
                <Text style={[styles.myTitleOfInput,{ color: this.props.textColor }]}>
                    {this.props.textValue}
                </Text>
                <TextInput
                    value={this.props.textValue}
                    onChangeText={this.props.whenIWrite}
                    style={styles.myTextInput}
                >
                </TextInput>
                <YeahComp 
                visible={this.props.showVapeNation}
                text={"Leggo"}
                />
            </View>
        )
    }
}

export default WhatIWrite;
