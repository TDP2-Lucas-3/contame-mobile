import {Image, View} from 'react-native';
import {styles} from '../../../styles/common';
import {Badge, Card, Icon} from 'react-native-elements';
import {verboseReportState} from '../../../utils/verbose_report_names';
import React from 'react';

export const MapReportImage = (props) => {
  console.log(props.image);
  return (
    <View style={{width: 300, height: 150}}>
      {props.image ? (
        <Image
          source={{uri: props.image}}
          style={[
            styles.borderTopRadius_1,
            {width: 300, height: 150},
          ]}
        />
      ) : (
        <Icon
          name="image-not-supported"
          testID="default_icon"
          type="material"
          containerStyle={[
            styles.borderTopRadius_1,
            styles.report_default_icon_container,
          ]}
        />
      )}
      <Badge
        badgeStyle={styles.report_status_badge_no_icon}
        status={'warning'}
        value={verboseReportState(props.state)}
      />
    </View>
  );
};
