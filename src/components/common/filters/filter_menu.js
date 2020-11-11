import React, {useState} from 'react';
import {View} from 'react-native';
import {Icon, Divider} from 'react-native-elements';
import {Menu, TouchableRipple} from 'react-native-paper';
import COLORS from '../../../styles/colors';
import {styles} from '../../../styles/common';
import {styles as filterStyles} from '../../../styles/filter';
import RalewayText from '../raleway_text';

const FilterMenu = (props) => {
  const [visible, setVisible] = useState(false);
  const {filters, onClear, filterCount} = props;

  const anchor = (
    <TouchableRipple onPress={() => setVisible(true)}>
      <View style={[styles.row]}>
        <Icon
          name="sliders-h"
          type="font-awesome-5"
          color={COLORS.LINK}
          size={15}
        />
        <RalewayText
          style={[styles.color_link, styles.pl_1_sm, styles.underline]}>
          {`Filtros ${filterCount > 0 ? `(${filterCount})` : ''}`}
        </RalewayText>
      </View>
    </TouchableRipple>
  );

  return (
    <View style={[styles.row, styles.ml_2]}>
      <Menu
        visible={visible}
        anchor={anchor}
        onDismiss={() => setVisible(false)}
        statusBarHeight={20}
        contentStyle={filterStyles.filter_content_container}>
        <View
          style={[
            styles.row,
            styles.justifyBetween,
            styles.alignCenter,
            styles.m_1,
          ]}>
          <RalewayText style={styles.font_md}>Filtrar Por:</RalewayText>
          <TouchableRipple onPress={onClear}>
            <RalewayText
              style={[styles.color_link, styles.underline, styles.font_sm]}>
              Limpiar Filtros
            </RalewayText>
          </TouchableRipple>
        </View>
        <Divider style={styles.strong_divider} />
        {filters}
      </Menu>
    </View>
  );
};

export default FilterMenu;
