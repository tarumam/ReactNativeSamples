import React from 'react'
import { Text, View, Image, TouchableOpacity, Alert } from 'react-native'

//Formatações:
const Estilos = {
  principal: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
}

const gerarNovaFrase = () => {
  var numeroAleatorio = Math.floor(Math.random() * 5)

  var frases = [
    'Frase 1',
    'Frase 2',
    'Frase 3',
    'Frase 4',
    'Frase 5'
  ]
  Alert.alert(frases[numeroAleatorio])
}

//Componente
const App = () => {
  const { principal, textoBotao, botao } = Estilos;
  return (
    <View style={principal}>
      <Image source={require('./imgs/logo.png')} />
      <TouchableOpacity
        style={botao}
        onPress={gerarNovaFrase}
      >
        <Text style={textoBotao}>Nova Frase</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App