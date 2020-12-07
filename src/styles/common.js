import {StyleSheet} from 'react-native';
import {colors} from 'react-native-elements';
import COLORS from './colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.main,
  },
  flex_1: {
    flex: 1,
  },
  justifyAround: {
    justifyContent: 'space-around',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  alignSelfStart: {
    alignSelf: 'flex-start',
  },
  alignSelfEnd: {
    alignSelf: 'flex-end',
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
    height: '50%',
    marginTop: 20,
  },
  incidentsMap: {
    width: '100%',
    height: '100%',
  },
  incidentsMapContainer: {
    backgroundColor: COLORS.main,
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
    borderWidth: 0,
    elevation: 5,
  },
  report_card_body: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  report_default_icon_container: {
    height: 150,
    justifyContent: 'center',
    backgroundColor: colors.grey3,
  },
  report_card_title: {
    fontFamily: 'Raleway-Bold',
    fontSize: 16,
    color: 'white',
  },
  borderTopRadius_1: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  border_bottom_radius_1: {
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  action_button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 14,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'black',
  },
  top_action_button: {
    position: 'absolute',
    bottom: 90,
    right: 20,
    height: 30,
    width: 30,
    borderRadius: 25,
    backgroundColor: colors.primary,
    justifyContent: 'center',
  },
  report_details_container: {
    flex: 1,
    backgroundColor: COLORS.main,
  },
  report_status_badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 10,
    padding: 5,
  },
  report_status_badge_no_icon: {
    position: 'absolute',
    top: -150,
    right: 0,
    margin: 10,
    padding: 5,
  },
  report_status_badge_detail: {
    position: 'absolute',
    top: -200,
    right: 0,
    margin: 15,
    padding: 5,
  },
  report_header_image: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    backgroundColor: colors.grey4,
  },
  report_header_title: {
    position: 'absolute',
    padding: 15,
    width: '85%',
    top: '82%',
    backgroundColor: COLORS.secondary,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  report_details_icon_container: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: 40,
    height: 40,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  report_details_map: {
    height: 250,
    width: '85%',
    margin: 30,
  },
  zIndex_9: {
    zIndex: 9,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
  },
  strong_divider: {
    borderWidth: 1,
    borderColor: colors.grey4,
  },
  maxHeight5: {
    maxHeight: '50%',
  },
  menu_bars_container: {
    backgroundColor: 'white',
    marginLeft: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    borderRadius: 10,
  },
  notification_icon_container: {
    backgroundColor: 'white',
    marginRight: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    borderRadius: 10,
  },
  map_popup: {
    borderRadius: 20,
  },
  popup_body: {
    backgroundColor: COLORS.secondary,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: 'white',
  },
  popup_content: {
    marginTop: 10,
    marginLeft: 10,
    justifyContent: 'space-around',
    backgroundColor: COLORS.secondary,
  },
  popup_location: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: -4,
  },
  popup_image: {
    height: 150,
    width: 300,
  },
  /* TEXT */
  underline: {
    textDecorationLine: 'underline',
  },
  link: {
    textDecorationLine: 'underline',
    color: colors.primary,
  },
  /* FONT */
  font_md: {
    fontSize: 18,
  },
  h4: {
    fontSize: 24,
  },
  font_14: {
    fontSize: 14,
  },
  font_12: {
    fontSize: 12,
  },
  font_sm: {
    fontSize: 10,
  },
  raleway: {
    fontFamily: 'Raleway-Regular',
  },
  raleway_bold: {
    fontFamily: 'Raleway-Bold',
  },
  /* MARGIN */
  m_1: {
    margin: 10,
  },
  m_2: {
    margin: 20,
  },
  m_3: {
    margin: 30,
  },
  mr_1: {
    marginRight: 10,
  },
  mr_1_sm: {
    marginRight: 3,
  },
  mr_2: {
    marginRight: 20,
  },
  mr_3: {
    marginRight: 30,
  },
  mv_2: {
    marginTop: 20,
    marginBottom: 20,
  },
  mh_2: {
    marginLeft: 20,
    marginRight: 20,
  },
  ml_1_5: {
    marginLeft: 15,
  },
  ml_2: {
    marginLeft: 20,
  },
  mb_1: {
    marginBottom: 10,
  },
  mb_2: {
    marginBottom: 20,
  },
  ml_3: {
    marginLeft: 30,
  },
  mr_5: {
    marginRight: 50,
  },
  ml_4: {
    marginLeft: 40,
  },
  mt_9: {
    marginTop: 90,
  },
  mt_2: {
    marginTop: 20,
  },
  mt_3: {
    marginTop: 30,
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
  pl_1_sm: {
    paddingLeft: 5,
  },
  /* COLORS */
  bg_grey: {
    backgroundColor: colors.grey4,
  },
  bg_main: {
    backgroundColor: COLORS.main,
  },
  bg_secondary: {
    backgroundColor: COLORS.secondary,
  },
  color_grey: {
    color: 'grey',
  },
  color_black: {
    color: 'black',
  },
  color_white: {
    color: 'white',
  },
  color_secondary: {
    color: COLORS.secondary,
  },
  color_link: {
    color: COLORS.LINK,
  },
  report_details_footer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: colors.grey3,
    backgroundColor: COLORS.secondary,
  },
  report_comments_container: {
    height: 30,
    width: '70%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    marginLeft: 10,
    backgroundColor: '#E5E5E5',
  },
  report_comments_input_container: {
    borderBottomColor: COLORS.secondary,
    height: 30,
  },
  report_comment_input: {
    fontFamily: 'Raleway-Regular',
    color: COLORS.secondary,
    fontSize: 14,
  },
  report_comment_icon: {
    borderRightColor: COLORS.secondary,
    borderRightWidth: 1,
    paddingRight: 10,
  },
  voteIcon: {
    padding: 5,
    width: 75,
    flexDirection: 'row',
  },
  general_comment_body_container: {
    backgroundColor: COLORS.secondary,
    padding: 12,
    paddingVertical: 7,
    borderRadius: 10,
    marginLeft: 10,
    marginBottom: 5,
  },
  general_comment_footer: {
    marginLeft: 45,
    fontSize: 12,
  },
  report_comment_disabled_icon: {
    backgroundColor: '#E5E5E5',
    opacity: 0.3,
  },
});
