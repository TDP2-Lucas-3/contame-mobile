import React from 'react';
import {View} from 'react-native';
import {List, Checkbox} from 'react-native-paper';
import {upperFirst, toLower} from 'lodash';
import {styles} from '../../../styles/filter';
import COLORS from '../../../styles/colors';

const CategoryFilter = (props) => {
  const {selected, onSelect, values} = props;

  return (
    <List.Accordion title="Categoria" titleStyle={styles.title}>
      <View style={styles.filter_items_container}>
        {values.map((category) => (
          <List.Item
            key={category}
            title={upperFirst(toLower(category))}
            right={() => (
              <Checkbox
                color={COLORS.blue}
                status={selected.includes(category) ? 'checked' : 'unchecked'}
                onPress={() => onSelect(category)}
              />
            )}
          />
        ))}
      </View>
    </List.Accordion>
  );
};

export default CategoryFilter;
