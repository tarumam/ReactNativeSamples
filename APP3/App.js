import React, { Component } from 'react'
import { Text, Button, View } from 'react-native'
import styles from './src/styles/styles'
import Topo from './src/components/topo'
import Icone from './src/components/icone'

class App3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      escolhaUsuario: '',
      escolhaComputador: '',
      resultado: ''
    };
  }

  jokenpo(escolhaUsuario) {
    let escolhaComputador = '';
    const numAleatorio = Math.floor(Math.random() * 3)

    switch (numAleatorio) {
      case 0:
        escolhaComputador = 'pedra';
        break;
      case 1:
        escolhaComputador = 'papel';
        break;
      case 2:
        escolhaComputador = 'tesoura';
        break;
      default:
        escolhaComputador = '';
    }

    let resultado = '';
    if (escolhaComputador === 'pedra') {
      if (escolhaUsuario === 'pedra') {
        resultado = 'Empate';
      }
      else if (escolhaUsuario === 'papel') {
        resultado = 'Você Ganhou';
      }
      else if (escolhaUsuario === 'tesoura') {
        resultado = 'Você Perdeu';
      }
    }

    else if (escolhaComputador === 'papel') {
      if (escolhaUsuario === 'papel') {
        resultado = 'Empate';
      }
      else if (escolhaUsuario === 'tesoura') {
        resultado = 'Você Ganhou';
      }
      else if (escolhaUsuario === 'pedra') {
        resultado = 'Você Perdeu';
      }
    }

    else if (escolhaComputador === 'tesoura') {
      if (escolhaUsuario === 'tesoura') {
        resultado = 'Empate';
      }
      else if (escolhaUsuario === 'pedra') {
        resultado = 'Você Ganhou';
      }
      else if (escolhaUsuario === 'papel') {
        resultado = 'Você Perdeu';
      }
    }

    this.setState({ escolhaUsuario, escolhaComputador, resultado })
  }

  render() {
    return (
      <View>
        <Topo />
        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button title='pedra' onPress={() => { this.jokenpo('pedra') }} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title='papel' onPress={() => { this.jokenpo('papel') }} />
          </View>
          <View style={styles.btnEscolha}>
            <Button title='tesoura' onPress={() => { this.jokenpo('tesoura') }} />
          </View>
        </View>
        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>

          <Icone escolha={this.state.escolhaComputador} jogador='computador' />
          <Icone escolha={this.state.escolhaUsuario} jogador='usuario' />

        </View>
      </View>
    )
  }
}
export default App3;