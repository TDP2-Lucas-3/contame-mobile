import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import COLORS from '../../../../styles/colors';

const buttonsStyle = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: 150,
    margin: 20,
    marginBottom: 0,
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
  backTitle: {
    fontFamily: 'Raleway-Regular',
    textDecorationLine: 'underline',
    color: COLORS.secondary,
  },
  disabled: {
    backgroundColor: 'grey',
  },
});

export const Next = (props) => (
  <Button
    title="Siguiente"
    {...props}
    containerStyle={buttonsStyle.container}
    buttonStyle={buttonsStyle.button}
    titleStyle={buttonsStyle.title}
    disabledStyle={buttonsStyle.disabled}
  />
);

export const Back = (props) => (
  <Button
    {...props}
    title="Volver"
    type="clear"
    containerStyle={buttonsStyle.container}
    titleStyle={buttonsStyle.backTitle}
    disabledStyle={buttonsStyle.disabled}
  />
);
