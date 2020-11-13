import moment from 'moment';
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Card, Text, Icon} from 'react-native-elements';
import {styles} from '../../../../styles/common';
import {ReportCardBottomBar} from './report_card_bottom_bar';
import {ReportImage} from './report_image';

const ReportDetails = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Card containerStyle={styles.report_card_container}>
        <ReportImage image={props.images[0]} state={props.state} />
        <View style={styles.report_card_body}>
          <View style={styles.m_1}>
            <Text style={styles.report_card_title}>{props.title}</Text>
            <Text style={[styles.color_grey, styles.raleway, styles.font_14]}>
              {moment(props.creationDate).fromNow()}
            </Text>
          </View>
          <View style={styles.m_1}>
            <Icon name="chevron-right" size={30} color="white" />
          </View>
        </View>
        <ReportCardBottomBar
          voteByUser={props.voteByUser}
          votes={props.votes}
        />
      </Card>
    </TouchableOpacity>
  );
};

export default ReportDetails;
