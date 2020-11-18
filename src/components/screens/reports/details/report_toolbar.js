import React, {useState} from 'react';
import {View} from 'react-native';
import {VoteButton} from './vote_button';
import {styles} from '../../../../styles/common';
import {Input} from 'react-native-elements';

const ReportToolbar = ({report, ...props}) => {
  const [inputHeight, setInputHeight] = useState(
    styles.report_comments_container.height,
  );
  return (
    <View style={styles.report_details_footer}>
      <VoteButton
        votes={report.votes}
        voteByUser={report.voteByUser}
        onPress={props.onVotePress}
        disabled={props.votesDisabled}
      />
      <Input
        multiline={true}
        containerStyle={[
          styles.report_comments_container,
          {height: inputHeight},
        ]}
        inputContainerStyle={[
          styles.report_comments_input_container,
          {height: inputHeight},
        ]}
        inputStyle={styles.report_comment_input}
        leftIcon={{
          name: 'comment',
          type: 'font-awesome-5',
          size: 15,
          containerStyle: styles.report_comment_icon,
        }}
        placeholder="Escribe un comentario..."
        onContentSizeChange={(e) =>
          setInputHeight(e.nativeEvent.contentSize.height)
        }
      />
    </View>
  );
};

export default ReportToolbar;
