import React from 'react';
import {View} from 'react-native';
import {Button, Input} from 'react-native-elements';

const TitleStep = (props) => (
  <View>
    <Input
      placeholder="Contanos brevemente"
      label="Que paso?"
      onChange={props.onChange}
    />
    <Button title="Siguiente" onPress={props.onSelect} />
  </View>
);

export default TitleStep;
