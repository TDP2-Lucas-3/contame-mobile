import React, {useState, useMemo, useCallback} from 'react';
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
  const neighborhoods = uniq(
    (data || []).map((report) => report.location.split(',').pop().trim()),
  );

  const onSelecteNeighborhood = (selected) =>
    setFilterData({...filterData, neighborhood: selected});

  const onSelectCategory = (selected) =>
    setFilterData({
      ...filterData,
      category: filterData.category.includes(selected)
        ? filterData.category.filter(
            (selectedCategory) => selectedCategory !== selected,
          )
        : [...filterData.category, selected],
    });

  const shouldShow = useCallback(
    (report) => {
      const matchsCategories =
        filterData.category.length > 0
          ? filterData.category.includes(report.category.name)
          : true;
      const matchsNeighborhood =
        filterData.neighborhood !== ''
          ? report.location.includes(filterData.neighborhood)
          : true;

      return matchsCategories && matchsNeighborhood;
    },
    [filterData],
  );

  const filteredData = useMemo(
    () => (data || []).filter((report) => shouldShow(report)),
    [shouldShow, data],
  );

  const renderFilter = () => (
    <FilterMenu
      filters={[
        <NeighborhoodFilter
          key="neighborhoodFilter"
          selected={filterData.neighborhood}
          onSelect={onSelecteNeighborhood}
          values={neighborhoods}
        />,
        <CategoryFilter
          key="categoryFilter"
          selected={filterData.category}
          onSelect={onSelectCategory}
          values={categories}
        />,
      ]}
    />
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={(filteredData || []).sort(
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
        ListHeaderComponent={renderFilter()}
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
