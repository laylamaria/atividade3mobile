import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import IMCMsg from './IMCMsg'

export class IMCCalc extends Component {
    constructor(props){
        super(props)
    }
    render() {
        let IMC = "";
        if(this.props.peso){
            IMC = this.props.peso/(this.props.altura*this.props.altura)
        }
        return (
            <View>
                <Text style = {style.negrito}>
                    Seu IMC é: {IMC}
                </Text>
                <IMCMsg IMC = {IMC}></IMCMsg>
            </View>
        )
    }
}
const style = StyleSheet.create({
    negrito: {
        fontWeight: 'bold',
        fontSize: 20
    }
})
export default IMCCalc
