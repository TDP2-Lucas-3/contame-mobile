import React from 'react';
import MapMarker from 'react-native-maps/lib/components/MapMarker';
import Callout from 'react-native-maps/lib/components/MapCallout';
import {styles} from './styles';
import ReportDetails from '../reports/list/report_details';

export const IncidentMarker = (props) => {
  return (
    <MapMarker
      key={props.id}
      coordinate={{latitude: props.lat, longitude: props.lon}}>
      <Callout
        style={styles.callout}
        onPress={() =>
          props.navigation.navigate('MapReportDetails', {reportId: props.id})
        }>
        <ReportDetails {...props} />
      </Callout>
    </MapMarker>
  );
};
