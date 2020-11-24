import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {getCategories} from '../../../../../config/routes';
import useAxios from 'axios-hooks';
import Loading from '../../../../common/loading';
import {capitalize} from 'lodash';
import RalewayText from '../../../../common/raleway_text';
import {styles} from '../../../../../styles/common';
import COLORS from '../../../../../styles/colors';

const categoryStyles = StyleSheet.create({
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#A9A9A9',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 20,
  },
  loadingContainer: {
    marginTop: 20,
  },
  item: {
    backgroundColor: COLORS.secondary,
  },
});

const CategoryStep = (props) => {
  const [{data, loading}] = useAxios(getCategories());

  const categories = [{key: 'category', value: 'Categoria'}, ...(data || [])];

  return (
    <View>
      <RalewayText h4>
        Seleccioná la categoría que te parezca apropiada...
      </RalewayText>
      {loading ? (
        <View style={categoryStyles.loadingContainer}>
          <ActivityIndicator color={COLORS.secondary} />
        </View>
      ) : (
        <View style={categoryStyles.pickerContainer}>
          <Picker
            style={categoryStyles.picker}
            itemStyle={categoryStyles.item}
            mode="dropdown"
            selectedValue={props.selected}
            onValueChange={(itemValue) =>
              props.onChange(
                'category',
                data.find((category) => category.key === itemValue).key,
              )
            }>
            {categories.map((category) => (
              <Picker.Item
                label={capitalize(category.value)}
                value={category.key}
                key={category.key}
                style={categoryStyles.item}
              />
            ))}
          </Picker>
        </View>
      )}
    </View>
  );
};

export default CategoryStep;
