import React, {useState, useRef} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {VoteButton} from './vote_button';
import {styles} from '../../../../styles/common';
import {Input} from 'react-native-elements';
import COLORS from '../../../../styles/colors';

const ReportToolbar = ({report, currentComment, loading, ...props}) => {
  const [inputHeight, setInputHeight] = useState(
    styles.report_comments_container.height,
  );

  const input = useRef(null);

  const onPostComment = () => {
    input.current.blur();
    props.onPostComment();
  };

  return (
    <View style={styles.report_details_footer}>
      <VoteButton
        votes={report.votes}
        voteByUser={report.voteByUser}
        onPress={props.onVotePress}
        disabled={props.votesDisabled}
      />
      <Input
        ref={input}
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
        rightIcon={
          loading ? (
            <ActivityIndicator size="small" color={COLORS.secondary} />
          ) : (
            {
              name: 'paper-plane',
              type: 'font-awesome-5',
              size: 15,
              onPress: onPostComment,
              disabled: currentComment.length === 0,
              disabledStyle: styles.report_comment_disabled_icon,
            }
          )
        }
        placeholder="Escribe un comentario..."
        onContentSizeChange={(e) =>
          setInputHeight(e.nativeEvent.contentSize.height)
        }
        onChangeText={props.onChangeComment}
        value={currentComment}
      />
    </View>
  );
};

export default ReportToolbar;
