import React from 'react';
import {View} from 'react-native';
import {Button, Input} from 'react-native-elements';

const MIN_LENGTH = 10;

const TitleStep = (props) => (
  <View>
    <Input
      placeholder="Contanos brevemente"
      label="Que paso?"
      onChangeText={(value) => props.onChange('title', value)}
    />
    <Button
      title="Siguiente"
      onPress={props.onSelect}
      disabled={props.title ? props.title.length < MIN_LENGTH : true}
    />
    <Button title="Volver" onPress={props.onBack} />
  </View>
);

export default TitleStep;
