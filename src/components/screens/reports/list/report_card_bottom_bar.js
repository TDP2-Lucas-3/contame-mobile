import React from 'react';
import {colors, Icon, Text} from 'react-native-elements';
import {View} from 'react-native';
import {styles} from './styles';
import {styles as commonStyles} from '../../../../styles/common'
import RalewayText from '../../../common/raleway_text';

export const ReportCardBottomBar = (props) => {
  return (
    <View style={[commonStyles.bg_secondary, commonStyles.border_bottom_radius_1]}>
      <View style={styles.voteIcon}>
        <Icon
          color={props.voteByUser ? colors.primary : 'white'}
          name={'thumb-up-alt'}
          type="material"
          size={15}
        />
        <RalewayText style={commonStyles.color_white}>{props.votes}</RalewayText>
      </View>
    </View>
  );
};
