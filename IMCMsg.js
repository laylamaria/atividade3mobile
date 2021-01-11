import React, { Component } from 'react'
import { View, Text, StyleSheet} from 'react-native'
export class IMCMsg extends Component {
    constructor(props){
        super(props)
    }
    render() {
        let IMC = this.props.IMC
        let mensagem = "";
        let css = style.mensagem;
        if(IMC < 17 && IMC != ""){
            mensagem = "Muito abaixo do peso";
        }else if(IMC >= 17 && IMC <= 18.49){
            mensagem = "Abaixo do peso";
        }else if(IMC >= 18.5 && IMC <= 24.99){
            mensagem = "Peso normal";
            css = style.normal;
        }else if(IMC >= 25 && IMC <= 29.99){
            mensagem = "Acima do peso";
        }else if(IMC >= 30 && IMC <= 34.99){
            mensagem = "Obesidade I";
        }else if(IMC >= 35 && IMC <= 39.99){
            mensagem = "Obesidade II(severa)";
        }else if(IMC >= 40){
            mensagem = "Obesidade III(mórbida)";
        }
        return (
            <View>
                <Text style = {css}>
                    {mensagem}
                </Text>
            </View>
        )
    }
}
const style = StyleSheet.create({
    mensagem: { color: "red", fontWeight: 'bold', fontSize: 20},
    normal: {color: "blue", fontWeight: 'bold', fontSize: 20}
})
export default IMCMsg
