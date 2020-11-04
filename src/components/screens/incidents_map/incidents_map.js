import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {styles} from '../../../styles/common';
import {DEFAULT_INITIAL_CENTER} from '../../../config/constants';

export const IncidentsMap = (props) => {
  console.log(props.data);
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.incidentsMap}
      initialRegion={{
        ...DEFAULT_INITIAL_CENTER,
        latitudeDelta: 0.15,
        longitudeDelta: 0.121,
      }}
    />
  );
};
