import {View} from 'react-native';
import {styles} from '../../../styles/common';
import {Badge, Icon} from 'react-native-elements';
import React from 'react';
import {WebView} from 'react-native-webview';

export const MapReportImage = (props) => {
  return (
    <View>
      {props.image ? (
        <View style={styles.popup_image}>
          <WebView
            containerStyle={styles.borderTopRadius_1}
            source={{uri: props.image}}
          />
        </View>
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
        badgeStyle={[
          styles.report_status_badge_no_icon,
          {backgroundColor: props.stateColor},
        ]}
        status={'warning'}
        value={props.state}
      />
    </View>
  );
};
