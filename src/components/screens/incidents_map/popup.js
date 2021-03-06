import React from 'react';
import {View} from 'react-native';
import {styles} from '../../../styles/common';
import {Icon, Text} from 'react-native-elements';
import {ReportCardBottomBar} from '../reports/list/report_card_bottom_bar';
import {MapReportImage} from './map_report_image';

export const Popup = (props) => {
  return (
    <View>
      <MapReportImage image={props.images[0]} state={props.state} />
      <View style={styles.popup_body}>
        <View style={styles.popup_content}>
          <Text style={styles.report_card_title}>{props.title}</Text>
          <View style={styles.popup_location}>
            <Icon
              name="place"
              testID="default_icon"
              type="material"
              size={20}
              color={'grey'}
            />
            <Text
              style={[
                styles.color_grey,
                styles.raleway,
                styles.font_14,
                styles.m_1,
              ]}>
              {props.hood}
            </Text>
          </View>
        </View>
        <View style={styles.m_1}>
          <Icon name="chevron-right" size={30} color="white" />
        </View>
      </View>
      <View style={styles.border_bottom_radius_1}>
        <ReportCardBottomBar
          voteByUser={props.voteByUser}
          votes={props.votes}
        />
      </View>
    </View>
  );
};
