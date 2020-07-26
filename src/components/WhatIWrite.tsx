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
    border: {
        borderColor: "red",
        borderWidth: 2
    }


})

class WhatIWrite extends React.PureComponent<MyProps>{
   

    render() {
        return (
            <View style={styles.myView}>
                <Text style={{ color: this.props.textColor }}>
                    {this.props.textValue}
                </Text>
                <TextInput
                    value={this.props.textValue}
                    onChangeText={this.props.whenIWrite}
                    style={styles.border}
                >
                </TextInput>
                <YeahComp 
                visible={this.props.showVapeNation}
                text={"i can give a little"}
                />
            </View>
        )
    }
}

export default WhatIWrite;
