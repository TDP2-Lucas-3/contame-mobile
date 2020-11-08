import React from 'react';
import {List, RadioButton} from 'react-native-paper';

const NeighborhoodFilter = (props) => {
  const {selected, onSelect, values} = props;
  return (
    <List.Accordion title="Barrio">
      {values.map((neighborhood) => (
        <List.Item
          key={neighborhood}
          title={neighborhood}
          right={() => (
            <RadioButton
              value={neighborhood}
              status={selected === neighborhood ? 'checked' : 'unchecked'}
              onPress={() => onSelect(neighborhood)}
            />
          )}
        />
      ))}
    </List.Accordion>
  );
};

export default NeighborhoodFilter;
