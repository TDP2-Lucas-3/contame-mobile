import React from 'react';
import MapMarker from 'react-native-maps/lib/components/MapMarker';
import Callout from 'react-native-maps/lib/components/MapCallout';
import {styles} from './styles';
import {Popup} from './popup';

export const IncidentMarker = (props) => {
  return (
    <MapMarker
      key={props.id}
      coordinate={{latitude: props.lat, longitude: props.lon}}>
      <Callout
        style={styles.callout}
        tooltip={true}
        onPress={() =>
          props.navigation.navigate('MapReportDetails', {reportId: props.id})
        }>
        <Popup {...props} />
      </Callout>
    </MapMarker>
  );
};
