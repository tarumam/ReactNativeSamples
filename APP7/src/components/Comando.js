import React from 'react';
import { View, Button } from 'react-native';

export default props => (
    <View>
        <Button title="Calcular" onPress={props.acao} />
    </View>
);
