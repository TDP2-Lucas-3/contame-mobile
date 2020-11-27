import React from 'react';
import {View, ScrollView} from 'react-native';
import {List, Checkbox} from 'react-native-paper';
import COLORS from '../../../styles/colors';
import {styles} from '../../../styles/filter';
import {styles as commonStyles} from '../../../styles/common';
import {capitalize} from 'lodash';

const CheckboxFilter = (props) => {
  const {selected, onSelect, values, title} = props;
  return (
    <List.Accordion title={title} titleStyle={styles.title}>
      <View style={styles.filter_items_container}>
        <ScrollView>
          {values.map((value) => (
            <List.Item
              key={value}
              title={capitalize(value)}
              titleStyle={commonStyles.raleway}
              right={() => (
                <Checkbox
                  color={COLORS.blue}
                  value={value}
                  status={selected.includes(value) ? 'checked' : 'unchecked'}
                  onPress={() => onSelect(value)}
                />
              )}
            />
          ))}
        </ScrollView>
      </View>
    </List.Accordion>
  );
};

export default CheckboxFilter;
