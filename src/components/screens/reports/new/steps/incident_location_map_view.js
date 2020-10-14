import React from 'react';
import {View, Button} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {styles} from '../../../../../styles/common';

const IncidentLocationMapViewStep = (props) => {
  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
      <Button title="Seleccionar" onPress={props.onSelect} />
    </View>
  );
};

export default IncidentLocationMapViewStep;
