import React from 'react';
import {View, ScrollView} from 'react-native';
import {Image, Text, Icon} from 'react-native-elements';
import {styles} from '../../../../styles/common';
import {capitalize} from 'lodash';
import moment from 'moment';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapMarker from 'react-native-maps/lib/components/MapMarker';
import {SliderBox} from 'react-native-image-slider-box';

const ReportDetails = (props) => {
  const {
    images,
    title,
    creationDate,
    description,
    lon: longitude,
    lat: latitude,
    location,
  } = props.report;

  return (
    <View style={styles.report_details_container}>
      <View style={styles.zIndex_9}>
        <SliderBox images={images} style={styles.report_header_image} />
        <View style={styles.report_header_title}>
          <Text h3 style={styles.ml_2}>
            {capitalize(title)}
          </Text>
        </View>
      </View>
      <ScrollView>
        <View style={[styles.row, styles.mt_9, styles.m_3, styles.alignCenter]}>
          <Icon
            name="calendar"
            type="font-awesome-5"
            containerStyle={styles.report_details_icon_container}
          />
          <Text style={styles.ml_2}>
            {moment(creationDate).format('D [de] MMMM, y')}
          </Text>
        </View>
        <View style={[styles.row, styles.ml_3, styles.alignCenter]}>
          <Icon
            name="map-marker"
            type="font-awesome-5"
            containerStyle={styles.report_details_icon_container}
          />
          <Text style={styles.ml_2}>
            {location || 'No se especifico ubicacion'}
          </Text>
        </View>
        <View style={[styles.ml_3, styles.mt_2, styles.mr_2]}>
          {description && (
            <>
              <Text h4>Detalles</Text>
              <Text style={styles.mt_2}>{description}</Text>
            </>
          )}
        </View>
        {Boolean(longitude && latitude) && (
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.report_details_map}
            initialRegion={{
              latitude,
              longitude,
              latitudeDelta: 1,
              longitudeDelta: 1,
            }}>
            <MapMarker
              coordinate={{
                latitude,
                longitude,
              }}
            />
          </MapView>
        )}
      </ScrollView>
    </View>
  );
};
export default ReportDetails;
