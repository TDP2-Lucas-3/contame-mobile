import React from 'react';
import {Picker} from '@react-native-community/picker';
import {getCategories} from '../../../../../config/routes';
import useAxios from 'axios-hooks';
import Loading from '../../../../common/loading';
import {capitalize} from 'lodash';

const CategoryStep = (props) => {
  const [{data, loading}] = useAxios(getCategories());

  return loading ? (
    <Loading />
  ) : (
    <Picker
      selectedValue={props.selected}
      onValueChange={(itemValue, itemIndex) =>
        props.onChange(
          'category',
          data.find((category) => category.id === itemValue).id,
        )
      }>
      {data.map((category) => (
        <Picker.Item
          label={capitalize(category.name)}
          value={category.id}
          key={category.id}
        />
      ))}
    </Picker>
  );
};

export default CategoryStep;
