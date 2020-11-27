import {View} from 'react-native';
import {Card, Icon} from 'react-native-elements';
import {styles} from '../../../../styles/common';
import React from 'react';
import {StatusBadge} from '../../../common/status_badge';

export const ReportImage = (props) => {
  return (
    <View style={styles.borderTopRadius_1}>
      {props.image ? (
        <Card.Image
          testID="card_image"
          source={{uri: props.image}}
          style={styles.borderTopRadius_1}>
          <StatusBadge
            state={props.state}
            styles={styles.report_status_badge}
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
          <StatusBadge state={props.state} color={props.stateColor} />
        </View>
      )}
    </View>
  );
};
