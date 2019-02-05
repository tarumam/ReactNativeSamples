import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import firebase from 'firebase';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { pontuacao: 0 };
  }
  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyD3vSdwT8HBog1gKGUzvqd1XCgoAuM9ez0",
      authDomain: "projetoteste-4dccc.firebaseapp.com",
      databaseURL: "https://projetoteste-4dccc.firebaseio.com",
      projectId: "projetoteste-4dccc",
      storageBucket: "projetoteste-4dccc.appspot.com",
      messagingSenderId: "909875279988"
    };
    firebase.initializeApp(config);
  }

  salvarDados() {
    var pontuacao = firebase.database().ref("pontuacao");
    pontuacao.push().set("100");
  }

  listarDados() {
    var pontuacao = firebase.database().ref("pontuacao");

    //Adicionar listener
    pontuacao.on('value', (snapshot) => {
      var pontos = snapshot.val();
      this.setState({ pontuacao: pontos })
    });
  }

  cadastrarUsuario() {
    var email = 'tarumam@yahoo.com.br';
    var senha = '123457';

    const usuario = firebase.auth();
    usuario.createUserWithEmailAndPassword(email, senha)
      .catch((erro) => {
        alert(erro.code + '\n' + erro.message)
      });
  }

  verificarUsuarioLogado() {
    const usuario = firebase.auth();

    /* //Um dos métodos para saber se o usuário está logado
    const usuarioAtual = usuario.currentUser;
    if (usuarioAtual) {
      alert('usuario logado');
    } else {
      alert('usuario não está logado');
    }*/

    //Cria listener para login do usuário (mais recomendado)
    //Ideal seria colocar no component will mount para evitar vários bindings
    usuario.onAuthStateChanged((usuarioAtual) => {
      if (usuarioAtual) {
        alert('usuario logado');
      } else {
        alert('usuario não está logado');
      }
    });
  }

  logoffUsuario() {
    const usuario = firebase.auth();
    usuario.signOut();
  }

  loginUsuario() {
    var email = 'tarumam@yahoo.com.br';
    var senha = '123457';

    const usuario = firebase.auth();
    usuario.signInWithEmailAndPassword(email, senha)
      .catch((erro) => {
        alert(erro.code + '\n' + erro.message)
      });
  }

  render() {
    let { pontuacao } = this.state;

    return (
      <View>
        <Text>FIREBASE</Text>
        <View>
          <Button
            onPress={() => this.salvarDados()}
            title="Salvar Dados"
            color="#841584"
            accessbilityLabel="Salvar dados"
          />

          <Button
            onPress={() => this.listarDados()}
            title="Listar Dados"
            color="#841584"
            accessbilityLabel="Listar dados"
          />
          <Text>{pontuacao}</Text>
        </View>

        <View>
          <Button
            onPress={() => this.cadastrarUsuario()}
            title="Cadastrar Usuario"
            color="gray"
            accessbilityLabel="Cadastrar Usuario"
          />

          <Button
            onPress={() => this.verificarUsuarioLogado()}
            title="Verificar usuário logado"
            color="gray"
            accessbilityLabel="Verificar Usuario Logado"
          />

          <Button
            onPress={() => this.logoffUsuario()}
            title="Logoff Usuario"
            color="gray"
            accessbilityLabel="Logoff Usuario"
          />

          <Button
            onPress={() => this.loginUsuario()}
            title="Login Usuário"
            color="gray"
            accessbilityLabel="Login Usuário"
          />
        </View>
      </View>
    );
  }
}
