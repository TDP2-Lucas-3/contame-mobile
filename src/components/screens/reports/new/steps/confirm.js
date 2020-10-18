import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';

const ConfirmStep = (props) => {
  const {onSubmit} = props;

  useEffect(() => {
    onSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <Text h1>¡Éxito!</Text>

      <Text>¡Gracias por reportar tu incidencia!</Text>
      <Button title={'Volver'} onPress={props.first} />
    </View>
  );
};

export default ConfirmStep;
