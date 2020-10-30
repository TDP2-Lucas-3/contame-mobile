import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {Input} from 'react-native-elements';

export const ProfileField = (props) => {
  const {defaultValue, label, onChangeText, error, errorText, disabled} = props;
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input
        disabled={disabled}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
      />
      {error && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};
