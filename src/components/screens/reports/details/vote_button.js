import {TouchableOpacity, View} from 'react-native';
import {notVotedStyles, alreadyVotedStyles} from './voteStyles';
import {colors, Icon, Text} from 'react-native-elements';
import React from 'react';

export const VoteButton = (props) => {
  let voteStyles = notVotedStyles;
  if (props.voteByUser) {
    voteStyles = alreadyVotedStyles;
  }

  console.log(props.votes);
  return (
    <View>
      <TouchableOpacity onPress={props.onPress} style={voteStyles.voteIcon}>
        <Icon
          color={props.voteByUser ? colors.primary : 'white'}
          name={'thumb-up-alt'}
          type="material"
        />
        <Text style={voteStyles.counter}>{props.votes}</Text>
      </TouchableOpacity>
    </View>
  );
};
