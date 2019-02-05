import React, { Component } from 'react';
import { ScrollView, Alert } from 'react-native';
import axios from 'axios';
import Itens from './Itens';

class ListaItens extends Component {

    constructor(props) {
        super(props);
        this.state = { listaItens: [] };
    }

    componentWillMount() {
        axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
            .then((resp) => {
                this.setState({ listaItens: resp.data });
            })
            .catch(() => Alert.alert('Erro ao recuperar as informações.'));
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: '#DDD' }}>
                {
                    this.state.listaItens.map((item, index) => {
                        return <Itens key={index} item={item} />;
                    })
                }
            </ScrollView>
        );
    }
}
export default ListaItens;
