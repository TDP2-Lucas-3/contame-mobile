import React from 'react';
import {View, ScrollView} from 'react-native';
import {List, Checkbox} from 'react-native-paper';
import COLORS from '../../../styles/colors';
import {styles} from '../../../styles/filter';
import {styles as commonStyles} from '../../../styles/common';

const NeighborhoodFilter = (props) => {
  const {selected, onSelect, values} = props;
  return (
    <List.Accordion title="Barrio" titleStyle={styles.title}>
      <View style={styles.filter_items_container}>
        <ScrollView>
          {values.map((neighborhood) => (
            <List.Item
              key={neighborhood}
              title={neighborhood}
              titleStyle={commonStyles.raleway}
              right={() => (
                <Checkbox
                  color={COLORS.blue}
                  value={neighborhood}
                  status={
                    selected.includes(neighborhood) ? 'checked' : 'unchecked'
                  }
                  onPress={() => onSelect(neighborhood)}
                />
              )}
            />
          ))}
        </ScrollView>
      </View>
    </List.Accordion>
  );
};

export default NeighborhoodFilter;
