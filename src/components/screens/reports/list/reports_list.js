import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {getMyReports} from '../../../../config/routes';
import ReportDetails from './report_details';
import useAxios from 'axios-hooks';
import {styles} from '../../../../styles/common';
import moment from 'moment';
import Loading from '../../../common/loading';

const ReportsList = ({navigation}) => {
  const [{data, loading}, refetch] = useAxios(getMyReports());

  return loading ? (
    <Loading />
  ) : (
    <View style={styles.container}>
      {data && data.length > 0 ? (
        <FlatList
          data={(data || []).sort(
            (a, b) => moment(a.creationDate) < moment(b.creationDate),
          )}
          renderItem={({item}) => (
            <ReportDetails
              {...item}
              onPress={() =>
                navigation.navigate('ReportDetails', {reportId: item.id})
              }
            />
          )}
          refreshing={loading}
          onRefresh={refetch}
        />
      ) : (
        <Text style={styles.alignCenter}>
          Aún no cargaste ninguna incidencia.
        </Text>
      )}
      <Icon
        name="plus"
        type="font-awesome-5"
        color="white"
        containerStyle={styles.action_button}
        onPress={() => navigation.navigate('NewReport')}
      />
    </View>
  );
};

export default ReportsList;
