import {View} from 'react-native';
import {Badge, Card, Icon} from 'react-native-elements';
import {styles} from '../../../../styles/common';
import {verboseReportState} from '../../../../utils/verbose_report_names';
import React from 'react';

export const ReportImage = (props) => {
  console.log(props.image);
  return (
    <View style={styles.borderTopRadius_1}>
      {props.image ? (
        <Card.Image
          testID="card_image"
          source={{uri: props.image}}
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
            containerStyle={[
              styles.borderTopRadius_1,
              styles.report_default_icon_container,
            ]}
          />
          <Badge
            badgeStyle={styles.report_status_badge_no_icon}
            status={'warning'}
            value={verboseReportState(props.state)}
          />
        </View>
      )}
    </View>
  );
};
