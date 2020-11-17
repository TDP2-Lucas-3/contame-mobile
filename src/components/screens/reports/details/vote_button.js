import {View} from 'react-native';
import {notVotedStyles, alreadyVotedStyles} from './voteStyles';
import {colors, Icon} from 'react-native-elements';
import {TouchableRipple} from 'react-native-paper';
import React from 'react';
import RalewayText from '../../../common/raleway_text';

export const VoteButton = (props) => {
  let voteStyles = notVotedStyles;
  if (props.voteByUser) {
    voteStyles = alreadyVotedStyles;
  }

  return (
    <View>
      <TouchableRipple
        onPress={props.onPress}
        style={voteStyles.voteIcon}
        disabled={props.disabled}>
        <React.Fragment>
          <Icon
            color={props.voteByUser ? colors.primary : 'white'}
            name={'thumb-up-alt'}
            type="material"
            size={20}
          />
          <RalewayText style={voteStyles.counter}>{props.votes}</RalewayText>
        </React.Fragment>
      </TouchableRipple>
    </View>
  );
};
