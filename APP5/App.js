
import React from 'react';
import { createStackNavigator } from 'react-navigation'
import CenaPrincipal from './src/components/CenaPrincipal'
import CenaClientes from './src/components/CenaClientes'
import BarraNavegacao from './src/components/BarraNavegacao'


const APP5 = createStackNavigator({
  Principal: { screen: CenaPrincipal, navigationOptions: () => ({ title: 'ATM Consultoria' }) },
  Clientes: { screen: CenaClientes, navigationOptions: () => ({ title: 'Clientes' }) }
}, {
    initialRouteName: 'Principal',
    navigationOptions: {
      headerTitle: (<BarraNavegacao />),
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'green',
        alignSelf: 'center'
      },
      // headerRight: <View style={{ height: 50, width: 50 }}></View>,
      // headerLeft: <View style={{ height: 50, width: 50 }}></View>,
      headerStyle: {
        backgroundColor: '#CCC',
      },
    }
  })

export default APP5