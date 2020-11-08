import React, {useState} from 'react';
import {View} from 'react-native';
import {Text, Icon, Divider} from 'react-native-elements';
import {Menu, TouchableRipple} from 'react-native-paper';
import COLORS from '../../../styles/colors';
import {styles} from '../../../styles/common';
import {styles as filterStyles} from '../../../styles/filter';

const FilterMenu = (props) => {
  const [visible, setVisible] = useState(false);
  const {filters, onClear} = props;

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

  return (
    <View style={[styles.alignSelfEnd, styles.mr_2]}>
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
          <Text style={styles.font_md}>Filtrar Por:</Text>
          <TouchableRipple onPress={onClear}>
            <Text style={[styles.color_link, styles.underline, styles.font_sm]}>
              Limpiar Filtros
            </Text>
          </TouchableRipple>
        </View>
        <Divider style={styles.strong_divider} />
        {filters}
      </Menu>
    </View>
  );
};

export default FilterMenu;
