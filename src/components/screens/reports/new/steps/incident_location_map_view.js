import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {styles} from '../../../../../styles/common';
import MapMarker from 'react-native-maps/lib/components/MapMarker';
import {getUserLocation} from '../../../../../utils/get_user_location';
import Loading from '../../../../common/loading';
import {DEFAULT_INITIAL_CENTER} from '../../../../../config/constants';
import RalewayText from '../../../../common/raleway_text';
import wizardStyles from '../styles';
import {Back, Next} from '../buttons';
import {isEmpty} from 'lodash';
import { Button } from 'react-native-paper';

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
      <RalewayText bold style={wizardStyles.title}>
        ¿Donde ocurrio?
      </RalewayText>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          ...center,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        onRegionChange={(region) => (region ? setCenter(region) : null)}>
        <MapMarker coordinate={center} />
      </MapView>
      <Next
        onPress={() => {
          props.onSelect('lat', center.latitude);
          props.onSelect('lon', center.longitude);
        }}
      />
      <Back onPress={props.onBack} />
    </View>
  );
};

export default IncidentLocationMapViewStep;
