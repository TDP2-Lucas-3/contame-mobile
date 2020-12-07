import React from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';

const SocialShare = (props) => {
  return (
    <View style={props.containerStyle}>
      <Icon name="share-square" type="font-awesome-5" color="white" />
    </View>
  );
};

export default SocialShare;
