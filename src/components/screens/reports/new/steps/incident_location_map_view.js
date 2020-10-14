import React, {useState} from 'react';
import {View, Button} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {styles} from '../../../../../styles/common';
import MapMarker from 'react-native-maps/lib/components/MapMarker';

const INITIAL_CENTER = {
  latitude: 37.78825,
  longitude: -122.4324,
};

const IncidentLocationMapViewStep = (props) => {
  const [center, setCenter] = useState({...INITIAL_CENTER});

  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          ...INITIAL_CENTER,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        onRegionChange={(region) => (region ? setCenter(region) : null)}>
        <MapMarker coordinate={center} />
      </MapView>
      <Button title="Seleccionar" onPress={props.onSelect} />
    </View>
  );
};

export default IncidentLocationMapViewStep;
