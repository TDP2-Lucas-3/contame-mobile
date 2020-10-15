import React from 'react';
import {Button, Text, View} from 'react-native';

const ConfirmStep = (props) => {
  return (
    <View>
      <Text>¡Éxito!</Text>

      <Text>¡Gracias por reportar tu incidencia!</Text>
      <Button title={'Volver'} onPress={props.first} />
    </View>
  );
};

export default ConfirmStep;
