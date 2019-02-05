import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../styles/styles';

const imgPedra = require('../../img/pedra.png');
const imgPapel = require('../../img/papel.png');
const imgTesoura = require('../../img/tesoura.png');

class Icone extends Component {
  render() {
    if (this.props.escolha === 'pedra') {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={imgPedra} />
        </View>
      );
    } else if (this.props.escolha === 'papel') {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={imgPapel} />
        </View>
      );
    } else if (this.props.escolha === 'tesoura') {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={imgTesoura} />
        </View>
      );
    }
    return false;
  }
}

export default Icone;
