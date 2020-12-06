import {StyleSheet} from 'react-native';
import {colors} from 'react-native-elements';
import COLORS from './colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.main,
  },
  header: {
    height: 200,
    backgroundColor: COLORS.secondary,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
  },
  form_container: {
    margin: 20,
  },
  header_divider: {
    borderWidth: 1,
    borderColor: 'white',
    marginHorizontal: 70,
  },
  imageContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Raleway-Bold',
    color: 'white',
    margin: 30,
  },
  image: {
    width: 100,
    height: 100,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  default_image: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    backgroundColor: colors.grey4,
    padding: 20,
  },
  label: {
    fontFamily: 'Raleway-Regular',
    color: COLORS.secondary,
  },
  buttonTitle: {
    fontFamily: 'Raleway-Regular',
    color: 'white',
  },
  button: {
    width: 130,
    height: 50,
    alignSelf: 'center',
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    marginTop: 20,
  },
});
