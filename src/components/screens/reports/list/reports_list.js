import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {getReports} from '../../../../config/routes';
import ReportDetails from './report_details';
import useAxios from 'axios-hooks';
import {styles} from '../../../../styles/common';

const ReportsList = ({navigation}) => {
  const [{data, loading}] = useAxios(getReports());

  return loading ? (
    <Text>Loading...</Text>
  ) : (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <ReportDetails {...item} />}
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
