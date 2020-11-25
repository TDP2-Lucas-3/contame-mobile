import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import {truncate} from 'lodash';
import {Back, Next} from '../buttons';
import wizardStyles from '../styles';
import COLORS from '../../../../../styles/colors';

const MIN_LENGTH = 10;
const MAX_TITLE_LENGTH = 20;

const titleStyles = StyleSheet.create({
  inputContainer: {
    paddingBottom: 100,
    borderColor: COLORS.secondary,
  },
  input: {
    color: COLORS.secondary,
  },
});

const TitleStep = (props) => (
  <View>
    <Input
      placeholder="Contanos brevemente"
      label="¿Que pasó?"
      labelStyle={wizardStyles.title}
      inputContainerStyle={titleStyles.inputContainer}
      inputStyle={titleStyles.input}
      containerStyle={titleStyles.container}
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
