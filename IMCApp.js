import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import IMCCalc from './IMCCalc'
export class IMCApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pesoEstado: 0,
            alturaEstado: 0.0,
            pesoChange: 0,
            alturaChange: 0.0,
        }
    }
    calcular (){
        console.log(this.state)
        this.setState({
            alturaEstado: this.state.alturaChange,
            pesoEstado: this.state.pesoChange,
        })
    }
    render() {
        return (
            <View>
                <Text>Calcule seu IMC</Text>
                <TextInput placeholder="Digite seu peso" onChangeText={(peso) => this.setState({ pesoChange: peso })}></TextInput>
                <TextInput placeholder="Digite sua altura" onChangeText={(altura) => this.setState({ alturaChange: altura })}></TextInput>
                <Button title="Calcular" onPress = {()=>this.calcular()}></Button>
                <IMCCalc peso = {this.state.pesoEstado} altura = {this.state.alturaEstado}></IMCCalc>
            </View>
        )
    }
}
export default IMCApp