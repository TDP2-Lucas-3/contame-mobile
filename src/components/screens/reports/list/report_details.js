import moment from 'moment';
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Card, Text, Icon, Badge} from 'react-native-elements';
import {styles} from '../../../../styles/common';
import {verboseReportState} from '../../../../utils/verbose_report_names';

const ReportDetails = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Card containerStyle={styles.report_card_container}>
        {props.images.length > 0 ? (
          <Card.Image
            testID="card_image"
            source={{uri: props.images[0]}}
            style={styles.borderTopRadius_1}>
            <Badge
              badgeStyle={styles.report_status_badge}
              status={'warning'}
              value={verboseReportState(props.state)}
            />
          </Card.Image>
        ) : (
          <View>
            <Icon
              name="image-not-supported"
              testID="default_icon"
              type="material"
              containerStyle={styles.report_default_icon_container}
            />
            <Badge
              badgeStyle={styles.report_status_badge_no_icon}
              status={'warning'}
              value={verboseReportState(props.state)}
            />
          </View>
        )}
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
      </Card>
    </TouchableOpacity>
  );
};

export default ReportDetails;
