import React, {useEffect, useState} from 'react';
import {View, Button, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {styles} from '../../../../../styles/common';
import MapMarker from 'react-native-maps/lib/components/MapMarker';
import {getUserLocation} from '../../../../../utils/get_user_location';
import Loading from '../../../../common/loading';

const DEFAULT_INITIAL_CENTER = {
  // Congreso de la Nación Argentina
  latitude: -34.609824,
  longitude: -58.392705,
};

async function fetch(setCenter) {
  let initialCenter = DEFAULT_INITIAL_CENTER;
  const location = await getUserLocation();
  if (location) {
    initialCenter = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
  }
  setCenter(initialCenter);
}

const IncidentLocationMapViewStep = (props) => {
  const [center, setCenter] = useState(null);
  useEffect(() => {
    fetch(setCenter);
  }, []);

  if (center === null) {
    return <Loading />;
  }

  return (
    <View>
      <Text h4>Donde ocurrio?</Text>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          ...center,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        onRegionChange={(region) => (region ? setCenter(region) : null)}>
        <MapMarker coordinate={center} />
      </MapView>
      <View>
        <Button
          title="Seleccionar"
          onPress={() => {
            props.onSelect('lat', center.latitude);
            props.onSelect('lon', center.longitude);
          }}
        />
        <Button title="Saltear" onPress={props.skip} />
      </View>
    </View>
  );
};

export default IncidentLocationMapViewStep;
