import React from 'react';
import {FlatList, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {getMyReports} from '../../../../config/routes';
import ReportDetails from './report_details';
import useAxios from 'axios-hooks';
import {styles} from '../../../../styles/common';
import moment from 'moment';
import FilterMenu from '../../../common/filter_menu';

const ReportsList = ({navigation}) => {
  const [{data, loading}, refetch] = useAxios(getMyReports());

  return (
    <View style={styles.container}>
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
        ListHeaderComponent={() => (
          <FilterMenu neighborhoods={['San Telmo', 'Palermo']} />
        )}
      />
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
