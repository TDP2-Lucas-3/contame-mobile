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
import CheckboxFilter from '../../../common/filters/checkbox_filter';
import {uniq, capitalize, flatten, compact} from 'lodash';
import EmptyMessage from '../../../common/empty_message';
import FlipCard from 'react-native-flip-card';
import Loading from '../../../common/loading';
import {IncidentsMap} from '../../incidents_map/incidents_map';
import {reportAttributesToFilterBy} from '../../../../config/filters.';
import {get} from 'lodash';

const viewTypes = {
  LIST: 'LIST',
  MAP: 'MAP',
};

const ReportsList = ({navigation, reportsAPI}) => {
  const [{data, loading}, refetch] = useAxios(reportsAPI);
  const [filterData, setFilterData] = useState(
    reportAttributesToFilterBy.reduce(
      (initialState, filter) => ({...initialState, [filter.stateKey]: []}),
      {},
    ),
  );

  const [viewType, setViewType] = useState(viewTypes.LIST);

  const switchViewType = () => {
    const types = Object.values(viewTypes);
    const currentIndex = types.findIndex((type) => type === viewType);
    setViewType(types[(currentIndex + 1) % types.length]);
  };

  const onSelect = (filterKey, selected) =>
    setFilterData({
      ...filterData,
      [filterKey]: filterData[filterKey].includes(selected)
        ? filterData[filterKey].filter(
            (selectedValue) => selectedValue !== selected,
          )
        : [...filterData[filterKey], selected],
    });

  const shouldShow = useCallback(
    (report) =>
      reportAttributesToFilterBy.every((filter) =>
        filterData[filter.stateKey].length > 0
          ? filterData[filter.stateKey].includes(get(report, filter.accesor))
          : true,
      ),
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
        filters={reportAttributesToFilterBy.map((filter) => (
          <CheckboxFilter
            title={filter.label}
            key={filter.label}
            selected={filterData[filter.stateKey]}
            onSelect={(value) => onSelect(filter.stateKey, value)}
            values={compact(
              uniq((data || []).map((report) => get(report, filter.accesor))),
            )}
          />
        ))}
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
    <View style={[styles.mh_2, styles.mb_2]}>
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
