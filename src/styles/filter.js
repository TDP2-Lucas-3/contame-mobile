import {StyleSheet} from 'react-native';
import {colors} from 'react-native-elements';

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
});
