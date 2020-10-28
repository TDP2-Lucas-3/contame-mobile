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
  justifyBetween: {
    justifyContent: 'space-between',
  },
  alignSelfStart: {
    alignSelf: 'flex-start',
  },
  alignCenter: {
    alignItems: 'center',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  fullH: {
    height: '100%',
  },
  fullW: {
    width: '100%',
  },
  map: {
    width: '100%',
    height: '85%',
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  row: {
    flexDirection: 'row',
  },
  image_icon: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
  },
  positionRelative: {
    position: 'relative',
  },
  close_icon: {
    position: 'absolute',
    top: 0,
    right: 8,
  },
  report_card_container: {
    padding: 0,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 5,
  },
  report_card_body: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  report_default_icon_container: {
    height: 150,
    justifyContent: 'center',
    backgroundColor: colors.grey3,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  borderTopRadius_1: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  action_button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 14,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary,
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
  mr_1: {
    marginRight: 10,
  },
  /* PADDING */
  pb_1: {
    paddingBottom: 10,
  },
  pb_2: {
    paddingBottom: 20,
  },
  p_1: {
    padding: 10,
  },
  pl_1: {
    paddingLeft: 10,
  },
  /* COLORS */
  bg_grey: {
    backgroundColor: colors.grey4,
  },
  color_grey: {
    color: 'grey',
  },
});
