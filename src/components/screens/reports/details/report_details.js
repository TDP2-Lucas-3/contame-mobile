import React from 'react';
import {View, ScrollView} from 'react-native';
import {Image, Text, Icon} from 'react-native-elements';
import {styles} from '../../../../styles/common';
import {capitalize} from 'lodash';
import moment from 'moment';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapMarker from 'react-native-maps/lib/components/MapMarker';

const ReportDetails = (props) => {
  const {images, title, creationDate, description, location} = props.report;
  return (
    <View style={styles.report_details_container}>
      <View style={styles.zIndex_9}>
        <Image source={{uri: images[0]}} style={styles.report_header_image} />
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
          <Text style={styles.ml_2}>{moment(creationDate).format('ll')}</Text>
        </View>
        <View style={[styles.row, styles.ml_3, styles.alignCenter]}>
          <Icon
            name="map-marker"
            type="font-awesome-5"
            containerStyle={styles.report_details_icon_container}
          />
          <Text style={styles.ml_2}>San Telmo, Buenos Aires</Text>
        </View>
        <View style={[styles.ml_3, styles.mt_2, styles.mr_2]}>
          <Text h4>Detalles</Text>
          <Text style={styles.mt_2}>{description}</Text>
        </View>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.report_details_map}
          initialRegion={{...location, latitudeDelta: 1, longitudeDelta: 1}}>
          <MapMarker coordinate={location} />
        </MapView>
      </ScrollView>
    </View>
  );
};
export default ReportDetails;
