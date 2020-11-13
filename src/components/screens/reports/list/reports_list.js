import React, {useState, useMemo, useCallback} from 'react';
import {FlatList, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {Chip} from 'react-native-paper';
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
import FlipCard from 'react-native-flip-card';
import Loading from '../../../common/loading';
import {IncidentsMap} from '../../incidents_map/incidents_map';

const viewTypes = {
  LIST: 'LIST',
  MAP: 'MAP',
};

const ReportsList = ({navigation, reportsAPI}) => {
  const [{data, loading}, refetch] = useAxios(reportsAPI);
  const [filterData, setFilterData] = useState({
    neighborhood: [],
    category: [],
  });
  const [viewType, setViewType] = useState(viewTypes.LIST);

  const switchViewType = () => {
    const types = Object.values(viewTypes);
    const currentIndex = types.findIndex((type) => type === viewType);
    setViewType(types[(currentIndex + 1) % types.length]);
  };

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

  const renderList = () => (
    <View style={[styles.mh_2]}>
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
        ListEmptyComponent={() => (
          <EmptyMessage
            title="No hay incidencias"
            message="Chequea tus filtros o recarga la pagina"
          />
        )}
      />
    </View>
  );

  const renderMap = () =>
    loading ? (
      <Loading />
    ) : (
      <IncidentsMap navigation={navigation} data={dataToRender || []} />
    );

  return (
    <View style={[styles.container, styles.justifyStart]}>
      <View style={[styles.mt_2, styles.ml_2]}>{renderFilter()}</View>
      <FlipCard
        flip={viewType === viewTypes.MAP}
        flipHorizontal={true}
        flipVertical={false}
        clickable={false}>
        {renderList()}
        {renderMap()}
      </FlipCard>
      <Icon
        name={viewType === viewTypes.MAP ? 'map' : 'list'}
        type="font-awesome-5"
        color="white"
        size={15}
        containerStyle={styles.top_action_button}
        onPress={switchViewType}
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
