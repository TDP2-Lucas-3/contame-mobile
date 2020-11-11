import {TouchableOpacity, View} from 'react-native';
import {notVotedStyles, alreadyVotedStyles} from './voteStyles';
import {colors, Icon, Text} from 'react-native-elements';
import React from 'react';
import RalewayText from '../../../common/raleway_text';

export const VoteButton = (props) => {
  let voteStyles = notVotedStyles;
  if (props.voteByUser) {
    voteStyles = alreadyVotedStyles;
  }

  return (
    <View>
      <TouchableOpacity onPress={props.onPress} style={voteStyles.voteIcon}>
        <Icon
          color={props.voteByUser ? colors.primary : 'white'}
          name={'thumb-up-alt'}
          type="material"
        />
        <RalewayText style={voteStyles.counter}>{props.votes}</RalewayText>
      </TouchableOpacity>
    </View>
  );
};
