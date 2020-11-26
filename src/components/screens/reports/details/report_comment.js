import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';
import {styles} from '../../../../styles/common';
import RalewayText from '../../../common/raleway_text';
import moment from 'moment';

const commonCommentStyles = StyleSheet.create({
  fontColor: {
    color: 'white',
  },
});

const commentStyles = StyleSheet.create({
  creatorName: {
    ...commonCommentStyles.fontColor,
    fontSize: 12,
  },
  creatorText: {
    fontSize: 8,
    color: 'grey',
  },
  body: {
    ...commonCommentStyles.fontColor,
    fontSize: 10,
  },
});

const ReportComment = ({comment}) => (
  <View style={styles.mb_2}>
    <View style={styles.row}>
      <Avatar source={{uri: comment.user.profile.photo}} rounded />
      <View style={styles.general_comment_body_container}>
        {comment.owner && (
          <View style={[styles.row]}>
            <Icon
              name="user-edit"
              type="font-awesome-5"
              size={7}
              color="grey"
              iconStyle={styles.mr_1_sm}
            />
            <RalewayText style={commentStyles.creatorText}>Creador</RalewayText>
          </View>
        )}
        <RalewayText bold style={commentStyles.creatorName}>
          {`${comment.user.profile.name} ${comment.user.profile.surename}`}
        </RalewayText>
        <RalewayText style={commentStyles.body}>{comment.comment}</RalewayText>
      </View>
    </View>
    <RalewayText style={styles.general_comment_footer}>
      {moment(comment.creationDate).fromNow()}
    </RalewayText>
  </View>
);

export default ReportComment;
