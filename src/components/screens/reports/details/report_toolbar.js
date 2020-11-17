import React from 'react';
import {View} from 'react-native';
import {VoteButton} from './vote_button';
import {styles} from '../../../../styles/common';

const ReportToolbar = ({report, ...props}) => (
  <View style={styles.report_details_footer}>
    <VoteButton
      votes={report.votes}
      voteByUser={report.voteByUser}
      onPress={props.onVotePress}
      disabled={props.votesDisabled}
    />
  </View>
);

export default ReportToolbar;
