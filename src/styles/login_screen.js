import {StyleSheet} from 'react-native';
import COLORS from './colors';

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 30,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  logoFirst: {
    fontSize: 48,
    color: 'white',
    fontFamily: 'Signika-Regular',
  },
  logoBlack: {
    color: COLORS.secondary,
    fontSize: 48,
    fontFamily: 'Signika-Regular',
  },
  logoSecond: {
    color: '#F4D35E',
    fontSize: 48,
    fontFamily: 'Signika-Regular',
  },
  description_container: {
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
    margin: 30,
    marginBottom: 60,
    color: 'white',
    fontFamily: 'Raleway-Regular',
  },
  loginButtonContainer: {
    height: '30%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
