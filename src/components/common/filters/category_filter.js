import React from 'react';
import {List, Checkbox} from 'react-native-paper';

const CategoryFilter = (props) => {
  const {selected, onSelect, values} = props;

  return (
    <List.Accordion title="Categoria">
      {values.map((category) => (
        <List.Item
          title={category}
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
