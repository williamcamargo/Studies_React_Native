//Navigation inserindo Drawer navigator para navegação lateral
//yarn add @react-navigation/drawer

import React from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TelaCanalExterna from './components/TelaCanal/TelaCanal';

const Gavetas = createDrawerNavigator();

function TelaHome({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

function TelaCanal({navigation}) {
  return <TelaCanalExterna nav={navigation} />;
}

function TelaCursos({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Cursos Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Gavetas.Navigator initialRouteName="TelaCanal">
        <Gavetas.Screen
          name="Home"
          component={TelaHome}
          options={{
            title: 'Tela Inicial',
            headerStyle: {
              backgroundColor: '#008',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Button
                title="Cursos"
                color="#000"
                onPress={() => alert('Botão Cursos Clicado')}
              />
            ),
          }}
        />

        <Gavetas.Screen
          name="Canal"
          component={TelaCanal}
          options={{title: 'Tela Canal'}}
        />

        <Gavetas.Screen
          name="Cursos"
          component={TelaCursos}
          options={{title: 'Tela Cursos'}}
        />
      </Gavetas.Navigator>
    </NavigationContainer>
  );
}
