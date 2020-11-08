import React from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {Text, Icon} from 'react-native-elements';
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
    votes,
  } = props.report;

  return (
    <View style={styles.report_details_container}>
      <View style={styles.zIndex_9}>
        {images.length > 0 ? (
          <SliderBox images={images} style={styles.report_header_image} />
        ) : (
          <Icon
            name="image-not-supported"
            testID="default_icon"
            type="material"
            containerStyle={styles.report_header_image}
          />
        )}
        <View style={styles.report_header_title}>
          <Text h4 style={[styles.ml_2, styles.color_white]}>
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
          <Text style={[styles.ml_2, styles.color_secondary]}>
            {moment(creationDate).format('D [de] MMMM, y')}
          </Text>
        </View>
        <View style={[styles.row, styles.ml_3, styles.alignCenter]}>
          <Icon
            name="map-marker"
            type="font-awesome-5"
            containerStyle={styles.report_details_icon_container}
          />
          <Text style={[styles.ml_2, styles.color_secondary]}>
            {location || 'No se especifico ubicacion'}
          </Text>
        </View>
        <View style={[styles.ml_3, styles.mt_2, styles.mr_2]}>
          {description && (
            <>
              <Text h4 style={styles.color_secondary}>
                Detalles
              </Text>
              <Text style={[styles.mt_2, styles.color_secondary]}>
                {description}
              </Text>
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

      <View style={styles.zIndex_9}>
        <View style={styles.report_details_footer}>
          <TouchableOpacity onPress={props.onVotePress} style={styles.voteIcon}>
            <Icon name={'thumb-up-alt'} type="material" />
            <Text>{votes}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default ReportDetails;
