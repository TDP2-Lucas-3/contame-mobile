import React from 'react';
import {View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {styles} from '../../../../../styles/common';
import {truncate} from 'lodash';

const MIN_LENGTH = 10;
const MAX_TITLE_LENGTH = 20;

const TitleStep = (props) => (
  <View>
    <Input
      placeholder="Contanos brevemente"
      label="Que paso?"
      onChangeText={(value) =>
        props.onChange(
          'title',
          truncate(value, {length: MAX_TITLE_LENGTH, omission: ''}),
        )
      }
      value={props.title}
    />
    <Button
      title="Siguiente"
      onPress={props.onSelect}
      disabled={props.title ? props.title.length < MIN_LENGTH : true}
    />
    <Button
      title="Volver"
      onPress={props.onBack}
      type="clear"
      titleStyle={styles.underline}
    />
  </View>
);

export default TitleStep;
