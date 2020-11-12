import React from 'react';
import {Text} from 'react-native-elements';
import {styles} from '../../styles/common';

const RalewayText = (props) => {
  const styleProp = Array.isArray(props.style) ? props.style : [props.style];
  const textProps = {...props};
  delete textProps.style;

  const textStyle = props.bold ? styles.raleway_bold : styles.raleway;

  return <Text style={[textStyle, ...styleProp]} {...textProps} />;
};

export default RalewayText;
