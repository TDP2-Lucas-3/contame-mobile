import React from 'react';
import {View} from 'react-native';
import {Input} from 'react-native-elements';
import {Back, Next} from '../buttons';
import wizardStyles from '../styles';

const DescriptionStep = (props) => (
  <View>
    <Input
      placeholder="Contanos todos los detalles que consideres necesarios"
      label="Detalles"
      labelStyle={wizardStyles.title}
      inputContainerStyle={wizardStyles.inputContainer}
      inputStyle={wizardStyles.input}
      containerStyle={wizardStyles.container}
      onChangeText={(value) => props.onChange('description', value)}
      multiline
    />
    <Next onPress={props.onSelect} />
    <Back onPress={props.onBack} />
  </View>
);

export default DescriptionStep;
