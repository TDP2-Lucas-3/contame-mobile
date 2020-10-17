import React from 'react';
import {View} from 'react-native';
import {Icon, Text} from 'react-native-elements';
import {truncate} from 'lodash';
import {styles} from '../../styles/common';

const MAX_IMAGE_NAME_LENGTH = 10;

const ImageIcon = (props) => (
  <View style={[styles.m_1, styles.positionRelative]}>
    <View style={[styles.image_icon, styles.bg_grey]}>
      <Icon name="camera" type="font-awesome" size={15} />
    </View>
    <Text>{truncate(props.name, {length: MAX_IMAGE_NAME_LENGTH})}</Text>
    <Icon
      name="times-circle"
      type="font-awesome"
      size={20}
      color="red"
      containerStyle={styles.close_icon}
      onPress={props.onRemove}
    />
  </View>
);

export default ImageIcon;
