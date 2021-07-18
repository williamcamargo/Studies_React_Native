//APP - Cara ou Coroa
import React, {useState} from 'react';
import {
  Text,
  Button,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';

export default function App() {
  const moedas = [
    require('./assets/Images/moeda/m1.jpg'),
    require('./assets/Images/moeda/m5.jpg'),
    require('./assets/Images/moeda/m1.jpg'),
    require('./assets/Images/moeda/m2.jpg'),
    require('./assets/Images/moeda/m3.jpg'),
    require('./assets/Images/moeda/m4.jpg'),
    require('./assets/Images/moeda/m5.jpg'),
    require('./assets/Images/moeda/m6.jpg'),
    require('./assets/Images/moeda/m7.jpg'),
    require('./assets/Images/moeda/m8.jpg'),
  ];
  let iMoeda = 0;
  const maxGiros = 5;

  const [moedaAtual, setMoedaAtual] = useState(moedas[iMoeda]);

  async function espera(tmp) {
    function tempo(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    await tempo(tmp);
  }

  async function girarMoeda() {
    iMoeda = 2;
    for (let i = 0; i < maxGiros * 8; i++) {
      iMoeda++;
      if (iMoeda > 9) {
        iMoeda = 2;
      }
      setMoedaAtual(moedas[iMoeda]);
      await espera(100);
    }
    let res = Math.floor(Math.random() * 10) + 1;
    if (res <= 5) {
      res = 0;
    } else {
      res = 1;
    }
    setMoedaAtual(moedas[res]);
  }

  return (
    <SafeAreaView style={estilos.container}>
      <Text style={estilos.titulo}>Cara ou Coroa</Text>
      <Image source={moedaAtual} />
      <Button
        title="Girar"
        onPress={() => {
          girarMoeda();
        }}
      />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
