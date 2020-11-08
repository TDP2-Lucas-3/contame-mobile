import React from 'react';
import {List, Checkbox} from 'react-native-paper';
import {upperFirst, toLower} from 'lodash';

const CategoryFilter = (props) => {
  const {selected, onSelect, values} = props;

  return (
    <List.Accordion title="Categoria">
      {values.map((category) => (
        <List.Item
          key={category}
          title={upperFirst(toLower(category))}
          right={() => (
            <Checkbox
              status={selected.includes(category) ? 'checked' : 'unchecked'}
              onPress={() => onSelect(category)}
            />
          )}
        />
      ))}
    </List.Accordion>
  );
};

export default CategoryFilter;
