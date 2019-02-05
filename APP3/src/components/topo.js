import React, { Component } from 'react';
import { View, Image } from 'react-native';

const Imagem = require('../../img/jokenpo.png');

class Topo extends Component {
    render() {
        return (
            <View>
                <Image source={Imagem} resizeMode="stretch" style={{ width: '100%' }} />
            </View>
        );
    }
}
export default Topo;
