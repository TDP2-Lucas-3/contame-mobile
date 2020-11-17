import React from 'react';
import {View} from 'react-native';
import {Avatar} from 'react-native-elements';
import {styles} from '../../../../styles/common';
import RalewayText from '../../../common/raleway_text';
import moment from 'moment';

const ReportComment = ({comment}) => (
  <View style={styles.mb_2}>
    <View style={styles.row}>
      <Avatar source={{uri: comment.avatar}} rounded />
      <View style={styles.comment_body_container}>
        <RalewayText bold style={styles.color_white}>
          {comment.user}
        </RalewayText>
        <RalewayText style={styles.color_white}>{comment.body}</RalewayText>
      </View>
    </View>
    <RalewayText style={styles.comment_footer}>
      {moment(comment.creationDate).fromNow()}
    </RalewayText>
  </View>
);

export default ReportComment;
