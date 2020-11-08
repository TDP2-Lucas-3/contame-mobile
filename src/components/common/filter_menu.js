import React, {useState} from 'react';
import {View} from 'react-native';
import {Text, Icon, Divider} from 'react-native-elements';
import {
  Menu,
  TouchableRipple,
  List,
  RadioButton,
  Checkbox,
} from 'react-native-paper';
import COLORS from '../../styles/colors';
import {styles} from '../../styles/common';
import {styles as filterStyles} from '../../styles/filter';

const FilterMenu = (props) => {
  const [visible, setVisible] = useState(false);
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const anchor = (
    <TouchableRipple onPress={() => setVisible(true)}>
      <View style={[styles.row]}>
        <Icon
          name="sliders-h"
          type="font-awesome-5"
          color={COLORS.LINK}
          size={15}
        />
        <Text style={[styles.color_link, styles.pl_1_sm, styles.underline]}>
          Filtros
        </Text>
      </View>
    </TouchableRipple>
  );

  const neighborhoodList = (
    <List.Accordion title="Barrio">
      {props.neighborhoods.map((neighborhood) => (
        <List.Item
          title={neighborhood}
          right={() => (
            <RadioButton
              value={neighborhood}
              status={
                selectedNeighborhood === neighborhood ? 'checked' : 'unchecked'
              }
              onPress={() => setSelectedNeighborhood(neighborhood)}
            />
          )}
        />
      ))}
    </List.Accordion>
  );

  const categoryList = (
    <List.Accordion title="Categoria">
      {props.categories.map((category) => (
        <List.Item
          title={category}
          right={() => (
            <Checkbox
              status={
                selectedCategories.includes(category) ? 'checked' : 'unchecked'
              }
              onPress={() =>
                selectedCategories.includes(category)
                  ? setSelectedCategories(
                      selectedCategories.filter(
                        (selectedCategory) => selectedCategory !== category,
                      ),
                    )
                  : setSelectedCategories([...selectedCategories, category])
              }
            />
          )}
        />
      ))}
    </List.Accordion>
  );

  return (
    <View style={[styles.alignSelfEnd, styles.mr_2]}>
      <Menu
        visible={visible}
        anchor={anchor}
        onDismiss={() => setVisible(false)}
        statusBarHeight={20}
        contentStyle={filterStyles.filter_content_container}>
        <Text h5>Filtrar Por:</Text>
        <Divider style={styles.strong_divider} />
        {neighborhoodList}
        {categoryList}
      </Menu>
    </View>
  );
};

export default FilterMenu;
