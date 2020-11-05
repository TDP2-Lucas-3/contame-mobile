import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import {styles} from '../../../styles/common';
import {DEFAULT_INITIAL_CENTER} from '../../../config/constants';
import {IncidentMarker} from './incident_marker';

export const IncidentsMap = (props) => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.incidentsMap}
      initialRegion={{
        ...DEFAULT_INITIAL_CENTER,
        latitudeDelta: 0.15,
        longitudeDelta: 0.121,
      }}>
      {props.data.map((x) => (
        <IncidentMarker navigation={props.navigation} key={x.id} {...x} />
      ))}
    </MapView>
  );
};
