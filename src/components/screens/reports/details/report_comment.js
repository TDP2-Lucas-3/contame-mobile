import React from 'react';
import {View} from 'react-native';
import {Avatar} from 'react-native-elements';
import {styles} from '../../../../styles/common';
import RalewayText from '../../../common/raleway_text';
import moment from 'moment';

const commentBody = (user, comment) => (
  <>
    <RalewayText bold style={styles.color_white}>
      {user}
    </RalewayText>
    <RalewayText style={styles.color_white}>{comment}</RalewayText>
  </>
);

const GeneralReportComment = ({comment}) => (
  <View style={styles.mb_2}>
    <View style={styles.row}>
      <Avatar source={{uri: comment.avatar}} rounded />
      <View style={styles.general_comment_body_container}>
        {commentBody(comment.user, comment.body)}
      </View>
    </View>
    <RalewayText style={styles.general_comment_footer}>
      {moment(comment.creationDate).fromNow()}
    </RalewayText>
  </View>
);

const OwnerReportComment = ({comment}) => (
  <View style={[styles.mb_2, styles.mr_3]}>
    <View style={[styles.row, styles.justifyEnd]}>
      <View style={styles.owner_comment_body_container}>
        {commentBody(comment.user, comment.body)}
      </View>
      <Avatar source={{uri: comment.avatar}} rounded />
    </View>
    <RalewayText style={styles.owner_comment_footer}>
      {moment(comment.creationDate).fromNow()}
    </RalewayText>
  </View>
);

const ReportComment = (props) =>
  props.comment.isOwner ? (
    <OwnerReportComment {...props} />
  ) : (
    <GeneralReportComment {...props} />
  );

export default ReportComment;
