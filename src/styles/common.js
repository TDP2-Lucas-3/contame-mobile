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
  alignSelfCenter: {
    alignSelf: 'flex-start',
  },
  alignCenter: {
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '85%',
  },
  row: {
    flexDirection: 'row',
  },
  image_icon: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    borderRadius: 10,
  },
  positionRelative: {
    position: 'relative',
  },
  close_icon: {
    position: 'absolute',
    top: 0,
    right: 8,
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
  /* COLORS */
  bg_grey: {
    backgroundColor: colors.grey4,
  },
});
