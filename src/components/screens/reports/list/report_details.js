import moment from 'moment';
import React from 'react';
import {View} from 'react-native';
import {Card, Text, Icon} from 'react-native-elements';
import {styles} from '../../../../styles/common';

const ReportDetails = (props) => (
  <Card containerStyle={styles.report_card_container}>
    {props.images.length > 0 ? (
      <Card.Image
        testID="card_image"
        source={{uri: props.images[0]}}
        style={styles.borderTopRadius_1}
      />
    ) : (
      <Icon
        name="image-not-supported"
        testID="default_icon"
        type="material"
        containerStyle={styles.report_default_icon_container}
      />
    )}
    <View style={styles.report_card_body}>
      <View>
        <Card.Title style={styles.alignSelfStart}>{props.title}</Card.Title>
        <Text style={styles.color_grey}>
          {moment(props.creationDate).fromNow()}
        </Text>
      </View>
      <View>
        <Icon name="chevron-right" size={30} />
      </View>
    </View>
  </Card>
);

export default ReportDetails;
