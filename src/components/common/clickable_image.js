import {Image, TouchableOpacity} from 'react-native';
import React from 'react';

export const ClickableImage = ({onPress, ...imageProps}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <Image {...imageProps} />
    </TouchableOpacity>
  );
};
