import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {getMyReports} from '../../../../config/routes';
import ReportDetails from './report_details';
import useAxios from 'axios-hooks';
import {styles} from '../../../../styles/common';
import moment from 'moment';
import FilterMenu from '../../../common/filters/filter_menu';
import CategoryFilter from '../../../common/filters/category_filter';
import NeighborhoodFilter from '../../../common/filters/neighborhood_filter';
import {uniq} from 'lodash';

const ReportsList = ({navigation}) => {
  const [{data, loading}, refetch] = useAxios(getMyReports());
  const [filterData, setFilterData] = useState({
    neighborhood: '',
    category: [],
  });

  const categories = uniq((data || []).map((report) => report.category.name));
  const neighborhoods = uniq((data || []).map((report) => report.location));

  const onSelecteNeighborhood = (selected) =>
    setFilterData({...data, neighborhood: selected});

  const onSelectCategory = (selected) =>
    setFilterData({
      ...filterData,
      category: filterData.category.includes(selected)
        ? filterData.category.filter(
            (selectedCategory) => selectedCategory !== selected,
          )
        : [...filterData.category, selected],
    });

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
          <FilterMenu
            filters={[
              <NeighborhoodFilter
                selected={filterData.neighborhood}
                onSelect={onSelecteNeighborhood}
                values={neighborhoods}
              />,
              <CategoryFilter
                selected={filterData.category}
                onSelect={onSelectCategory}
                values={categories}
              />,
            ]}
          />
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
