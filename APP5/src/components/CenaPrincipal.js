
import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import BarraNavegacao from './BarraNavegacao'

const logo = require('../imgs/logo.png')
const menuCliente = require('../imgs/menu_cliente.png')
const menuContato = require('../imgs/menu_contato.png')
const menuEmpresa = require('../imgs/menu_empresa.png')
const menuServico = require('../imgs/menu_servico.png')

export default class CenaPrincipal extends Component {
    render() {
        return (
            <View style={{backgroundColor:'#FFF'}}>
                <StatusBar hidden={false} backgroundColor='#CCC' />
                <View style={styles.logo}>
                    <Image source={logo} />
                </View>
                <View style={styles.menu}>
                    <View style={styles.menuGrupo}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Clientes')}>
                            <Image style={styles.images} source={menuCliente} />
                        </TouchableHighlight>

                        <Image style={styles.images} source={menuContato} />
                    </View>
                    <View style={styles.menuGrupo}>
                        <Image style={styles.images} source={menuEmpresa} />
                        <Image style={styles.images} source={menuServico} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        marginTop: 30,
        alignItems: 'center'
    },
    menu: {
        alignItems: 'center'
    },
    menuGrupo: {
        flexDirection: 'row',
    },
    images: {
        margin: 15
    }
})