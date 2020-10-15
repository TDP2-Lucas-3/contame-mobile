import {StyleSheet} from 'react-native';
import {colors} from 'react-native-elements';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
  },
  justifyAround: {
    justifyContent: 'space-around',
  },
  alignCenter: {
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '85%',
  },
  /* TEXT */
  underline: {
    textDecorationLine: 'underline',
  },
  link: {
    textDecorationLine: 'underline',
    color: colors.primary,
  },
  /* MARGIN */
  m_1: {
    margin: 10,
  },
  /* PADDING */
  p_2: {
    paddingBottom: 20,
  },
});
