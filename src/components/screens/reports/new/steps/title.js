import React from 'react';
import {Input} from 'react-native-elements';

const TitleStep = (props) => (
  <Input
    placeholder="Contanos brevemente"
    label="Que paso?"
    onChange={props.onChange}
  />
);

export default TitleStep;
