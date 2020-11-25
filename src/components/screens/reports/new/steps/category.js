import React, {useState} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {getCategories, getSubCategories} from '../../../../../config/routes';
import useAxios from 'axios-hooks';
import {capitalize} from 'lodash';
import RalewayText from '../../../../common/raleway_text';
import COLORS from '../../../../../styles/colors';
import {Next} from '../buttons';
import wizardStyles from '../styles';

const categoryStyles = StyleSheet.create({
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#A9A9A9',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    marginTop: 20,
  },
  loadingContainer: {
    marginTop: 20,
  },
  item: {
    backgroundColor: COLORS.secondary,
  },
  stepContainer: {
    height: '60%',
  },
});

const CommonPicker = (props) =>
  props.loading ? (
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
        onValueChange={props.onChange}>
        {props.data.map((category) => (
          <Picker.Item
            label={capitalize(category.value)}
            value={category.key}
            key={category.key}
            style={categoryStyles.item}
          />
        ))}
      </Picker>
    </View>
  );

const CategoryPicker = (props) => {
  const [{data, loading}] = useAxios(getCategories());

  const categories = [{key: 'category', value: 'Categoria'}, ...(data || [])];

  return (
    <CommonPicker
      onChange={(itemValue) =>
        props.onChange(
          'category',
          data.find((category) => category.key === itemValue).key,
        )
      }
      loading={loading}
      data={categories}
      selected={props.category}
    />
  );
};

const SubCategoryPicker = (props) => {
  console.log(props);
  const [{data, loading}] = useAxios(getSubCategories(props.category));

  const subcategories = [
    {key: 'subcategory', value: 'Sub-Categoria'},
    ...(data || []).map((subcategory, index) => ({
      key: index,
      value: subcategory,
    })),
  ];

  return (
    <CommonPicker
      onChange={(itemValue) =>
        props.onChange(
          'subcategory',
          subcategories.find((subcategory) => subcategory.key === itemValue)
            .value,
        )
      }
      loading={loading}
      data={subcategories}
      selected={
        (
          subcategories.find(
            (subcategory) => subcategory.value === props.subcategory,
          ) || {}
        ).key
      }
    />
  );
};

const CategoryStep = (props) => {
  const [showSubCategories, setShowSubcategories] = useState(false);

  const onSelectCategory = (...args) => {
    props.onChange(...args);
    setShowSubcategories(true);
  };

  return (
    <>
      <View style={categoryStyles.stepContainer}>
        <RalewayText bold style={wizardStyles.title}>
          Seleccioná la categoría que te parezca apropiada...
        </RalewayText>
        <CategoryPicker {...props} onChange={onSelectCategory} />
        {showSubCategories && <SubCategoryPicker {...props} />}
      </View>
      <Next disabled={Boolean(!props.subcategory)} onPress={props.onNext} />
    </>
  );
};

export default CategoryStep;
