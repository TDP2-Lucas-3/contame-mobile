import React, {useState} from 'react';
import {View} from 'react-native';
import {Text, Icon} from 'react-native-elements';
import {Menu, TouchableRipple} from 'react-native-paper';
import COLORS from '../../styles/colors';
import {styles} from '../../styles/common';

const FilterMenu = (props) => {
  const [visible, setVisible] = useState(false);

  const anchor = (
    <TouchableRipple onPress={() => setVisible(true)}>
      <View
        style={[
          styles.row,
          styles.justifyEnd,
          styles.mr_2,
          styles.alignCenter,
        ]}>
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

  return (
    <Menu
      visible={visible}
      anchor={anchor}
      onDismiss={() => setVisible(false)}
    />
  );
};

export default FilterMenu;
