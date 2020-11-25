import {StyleSheet} from 'react-native';
import COLORS from '../../../../styles/colors';

export default StyleSheet.create({
  title: {
    fontFamily: 'Raleway-Bold',
    color: COLORS.secondary,
    fontSize: 24,
  },
  inputContainer: {
    paddingBottom: 100,
    borderColor: COLORS.secondary,
  },
  input: {
    color: COLORS.secondary,
  },
});
