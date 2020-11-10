import {StyleSheet} from 'react-native';
import {colors} from 'react-native-elements';
import COLORS from './colors';

export const styles = StyleSheet.create({
  filter_content_container: {
    width: 200,
  },
  filter_items_container: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.grey4,
    backgroundColor: '#E4E4E4',
    maxHeight: '70%',
  },
  title: {
    color: 'black',
    fontFamily: 'Raleway-SemiBold',
  },
  chip: {
    height: 20,
    alignItems: 'center',
    marginLeft: 5,
    marginBottom: 5,
    backgroundColor: colors.grey3,
  },
});
