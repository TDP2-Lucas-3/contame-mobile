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
  },
  button: {
    backgroundColor: COLORS.secondary,
    padding: 15,
  },
  title: {
    fontFamily: 'Raleway-Regular',
  },
});

export const Next = (props) => (
  <Button
    title="Siguiente"
    onPress={props.onPress}
    containerStyle={buttonsStyle.container}
    buttonStyle={buttonsStyle.button}
    titleStyle={buttonsStyle.title}
  />
);
