import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import COLORS from '../../../../styles/colors';

const buttonsStyle = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: 150,
    margin: 20,
    marginBottom: 50,
    borderRadius: 10,
    height: 50,
  },
  button: {
    backgroundColor: COLORS.secondary,
    padding: 15,
  },
  title: {
    fontFamily: 'Raleway-Regular',
  },
  disabled: {
    backgroundColor: 'grey',
  },
});

export const Next = (props) => (
  <Button
    {...props}
    title="Siguiente"
    containerStyle={buttonsStyle.container}
    buttonStyle={buttonsStyle.button}
    titleStyle={buttonsStyle.title}
    disabledStyle={buttonsStyle.disabled}
  />
);
