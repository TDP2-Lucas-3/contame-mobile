import {View} from 'react-native';
import {Badge, Card, Icon} from 'react-native-elements';
import {styles} from '../../../../styles/common';
import React from 'react';

export const ReportImage = (props) => {
  return (
    <View style={styles.borderTopRadius_1}>
      {props.image ? (
        <Card.Image
          testID="card_image"
          source={{uri: props.image}}
          style={styles.borderTopRadius_1}>
          <Badge
            badgeStyle={[
              styles.report_status_badge,
              {backgroundColor: props.stateColor},
            ]}
            value={props.state}
          />
        </Card.Image>
      ) : (
        <View>
          <Icon
            name="image-not-supported"
            testID="default_icon"
            type="material"
            containerStyle={[
              styles.borderTopRadius_1,
              styles.report_default_icon_container,
            ]}
          />
          <Badge
            badgeStyle={[
              styles.report_status_badge_no_icon,
              {backgroundColor: props.stateColor},
            ]}
            value={props.state}
          />
        </View>
      )}
    </View>
  );
};
