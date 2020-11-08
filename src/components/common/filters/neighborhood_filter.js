import React from 'react';
import {View} from 'react-native';
import {List, RadioButton} from 'react-native-paper';
import COLORS from '../../../styles/colors';
import {styles} from '../../../styles/filter';

const NeighborhoodFilter = (props) => {
  const {selected, onSelect, values} = props;
  return (
    <List.Accordion title="Barrio" titleStyle={styles.title}>
      <View style={styles.filter_items_container}>
        {values.map((neighborhood) => (
          <List.Item
            key={neighborhood}
            title={neighborhood}
            right={() => (
              <RadioButton
                color={COLORS.blue}
                value={neighborhood}
                status={selected === neighborhood ? 'checked' : 'unchecked'}
                onPress={() => onSelect(neighborhood)}
              />
            )}
          />
        ))}
      </View>
    </List.Accordion>
  );
};

export default NeighborhoodFilter;
