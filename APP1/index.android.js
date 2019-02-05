import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

const geraNumeroAleatorio = () => alert(Math.floor(Math.random() * 10))

const App = () => {
  return (
    <View>
      <Text>Meu primeiro app arrow</Text>
      <Button title="Gerar número randomico" onPress={geraNumeroAleatorio} />
    </View>
  );
};

AppRegistry.registerComponent('APP1', () => App);
