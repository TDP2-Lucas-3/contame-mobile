import React from 'react';
import {ReportImage} from '../reports/list/report_image';
import {View} from 'react-native';
import {styles} from '../../../styles/common';
import {Icon, Text} from 'react-native-elements';
import moment from 'moment';

export const Popup = (props) => {
  return (
    <View style={styles.map_popup}>
      <ReportImage image={props.images[0]} state={props.state} />
      <View style={styles.popup_body}>
        <View style={styles.popup_content}>
          <Text style={styles.report_card_title}>{props.title}</Text>
          <View style={styles.popup_location}>
            <Icon
              name="location_on"
              testID="default_icon"
              type="material"
              size={10}
              color={'white'}
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
    </View>
  );
};
