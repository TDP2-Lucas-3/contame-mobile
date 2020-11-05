import React from 'react';
import {Text, View} from 'react-native';
import MapMarker from 'react-native-maps/lib/components/MapMarker';
import Callout from 'react-native-maps/lib/components/MapCallout';
import {styles} from './styles';
import {Card} from 'react-native-elements';
import ReportDetails from '../reports/list/report_details';

export const IncidentMarker = (props) => {
  console.log(props.title);
  return (
    <MapMarker
      key={props.id}
      coordinate={{latitude: props.lat, longitude: props.lon}}>
      <Callout
        style={styles.callout}
        onPress={() =>
          props.navigation.navigate('ReportDetails', {reportId: props.id})
        }>
        <ReportDetails {...props} />
      </Callout>
    </MapMarker>
  );
};
