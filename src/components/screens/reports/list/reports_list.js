import React, {useState, useMemo, useCallback} from 'react';
import {FlatList, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {Chip} from 'react-native-paper';
import {getMyReports} from '../../../../config/routes';
import ReportDetails from './report_details';
import useAxios from 'axios-hooks';
import {styles} from '../../../../styles/common';
import {styles as filterStyles} from '../../../../styles/filter';
import moment from 'moment';
import FilterMenu from '../../../common/filters/filter_menu';
import CategoryFilter from '../../../common/filters/category_filter';
import NeighborhoodFilter from '../../../common/filters/neighborhood_filter';
import {uniq, capitalize, flatten, compact} from 'lodash';
import EmptyMessage from '../../../common/empty_message';

const ReportsList = ({navigation}) => {
  const [{data, loading}, refetch] = useAxios(getMyReports());
  const [filterData, setFilterData] = useState({
    neighborhood: [],
    category: [],
  });

  const categories = compact(
    uniq((data || []).map((report) => report.category.name)),
  );
  const neighborhoods = compact(
    uniq((data || []).map((report) => report.location.split(',').pop().trim())),
  ).filter((location) => location !== 'null');

  const onSelect = (filter, selected) =>
    setFilterData({
      ...filterData,
      [filter]: filterData[filter].includes(selected)
        ? filterData[filter].filter(
            (selectedValue) => selectedValue !== selected,
          )
        : [...filterData[filter], selected],
    });

  const shouldShow = useCallback(
    (report) => {
      const matchsCategories =
        filterData.category.length > 0
          ? filterData.category.includes(report.category.name)
          : true;
      const matchsNeighborhood =
        filterData.neighborhood.length > 0
          ? filterData.neighborhood.some((neighborhoodFilter) =>
              report.location.includes(neighborhoodFilter),
            )
          : true;

      return matchsCategories && matchsNeighborhood;
    },
    [filterData],
  );

  const dataToRender = useMemo(
    () =>
      (data || [])
        .filter((report) => shouldShow(report))
        .sort((a, b) => moment(a.creationDate) < moment(b.creationDate)),
    [shouldShow, data],
  );

  const renderFilter = () => (
    <View style={styles.row}>
      <FilterMenu
        onClear={() => setFilterData({category: [], neighborhood: []})}
        filters={[
          <NeighborhoodFilter
            key="neighborhoodFilter"
            selected={filterData.neighborhood}
            onSelect={(value) => onSelect('neighborhood', value)}
            values={neighborhoods}
          />,
          <CategoryFilter
            key="categoryFilter"
            selected={filterData.category}
            onSelect={(value) => onSelect('category', value)}
            values={categories}
          />,
        ]}
        filterCount={flatten(Object.values(filterData)).length}
      />
      <View style={[styles.row, styles.flexWrap, styles.flex_1]}>
        {Object.keys(filterData).map((filterType) =>
          filterData[filterType].map((filter) =>
            filter.length > 0 ? (
              <Chip
                key={filter}
                textStyle={[styles.font_sm, styles.raleway]}
                style={filterStyles.chip}
                onClose={() => onSelect(filterType, filter)}>
                {capitalize(filter)}
              </Chip>
            ) : null,
          ),
        )}
      </View>
    </View>
  );

  return (
    <View style={[styles.container, styles.justifyStart]}>
      <View style={[styles.m_2]}>
        <FlatList
          data={dataToRender || []}
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
          ListEmptyComponent={() => (
            <EmptyMessage
              title="No hay incidencias"
              message="Chequea tus filtros o recarga la pagina"
            />
          )}
        />
      </View>
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
