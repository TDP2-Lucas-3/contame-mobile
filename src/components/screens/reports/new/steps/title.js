import React from 'react';
import {View} from 'react-native';
import {Input} from 'react-native-elements';
import {truncate} from 'lodash';
import {Back, Next} from '../buttons';
import wizardStyles from '../styles';

const MIN_LENGTH = 10;
const MAX_TITLE_LENGTH = 20;

const TitleStep = (props) => (
  <View>
    <Input
      placeholder="Contanos brevemente"
      label="¿Que pasó?"
      labelStyle={wizardStyles.title}
      inputContainerStyle={wizardStyles.inputContainer}
      inputStyle={wizardStyles.input}
      containerStyle={wizardStyles.container}
      onChangeText={(value) =>
        props.onChange(
          'title',
          truncate(value, {length: MAX_TITLE_LENGTH, omission: ''}),
        )
      }
      value={props.title}
    />
    <Next
      onPress={props.onSelect}
      disabled={!props.title || props.title.length < MIN_LENGTH}
    />
    <Back onPress={props.onBack} />
  </View>
);

export default TitleStep;
