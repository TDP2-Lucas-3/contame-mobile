import React from 'react';
import {Text} from 'react-native-elements';
import {styles} from '../../styles/common';

const RalewayText = (props) => {
  const styleProp = Array.isArray(props.style) ? props.style : [props.style];
  const textProps = {...props};
  delete textProps.style;

  return <Text style={[styles.raleway, ...styleProp]} {...textProps} />;
};

export default RalewayText;
