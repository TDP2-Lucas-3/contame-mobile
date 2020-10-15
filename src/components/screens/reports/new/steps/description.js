import React from 'react';
import {View} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {styles} from '../../../../../styles/common';

const DescriptionStep = (props) => (
  <View>
    <Input
      placeholder="Contanos todos los detalles que consideres necesarios"
      label="Detalles?"
      onChangeText={(value) => props.onChange('description', value)}
      multiline
    />
    <Button
      title={props.description ? 'Siguiente' : 'Saltear'}
      onPress={props.onSelect}
    />
    <Button
      title="Volver"
      onPress={props.onBack}
      type="clear"
      titleStyle={styles.underline}
    />
  </View>
);

export default DescriptionStep;
