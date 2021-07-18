//APP - Calculadora
import React, { useState } from 'react';
import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    TextInput,
    TouchableHighlight,
} from 'react-native';

export default function App() {
    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);
    const [resultado, setResultado] = useState(0);

    const soma = () => {
        if (valor1 != '' && valor2 != '') {
            setResultado(parseInt(valor1) + parseInt(valor2));
        } else {
            alert('Insira os valores')
        }
    }

    return (
        <SafeAreaView style={estilos.container}>
            <Text>Calculadora</Text>
            <TextInput
                style={estilos.display}
                value={String(valor1)}
                onChangeText={(text) => { setValor1(text) }}
                keyboardType='numeric'
            ></TextInput>

            <TextInput
                style={estilos.display}
                value={String(valor2)}
                onChangeText={(text) => { setValor2(text) }}
                keyboardType='numeric'
            ></TextInput>

            <TextInput
                style={estilos.display}
                value={String(resultado)}
                onChangeText={(text) => { setResultado(text) }}
            ></TextInput>

            <TouchableHighlight style={estilos.btn} onPress={soma}>
                <Text style={estilos.txtBtn}>SOMAR</Text>
            </TouchableHighlight>
        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    container: {
        padding: 20,
    },
    display: {
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
    },
    btn: {
        backgroundColor: '#aaa',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center'
    },
    txtBtn: {
        color: '#900'
    }
});
