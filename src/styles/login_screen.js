import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 20,
  },
  logoFirst: {
    fontSize: 48,
    justifyContent: 'center',
    color: 'white',
    fontFamily: 'Signika-Regular',
  },
  logoSecond: {
    color: '#F4D35E',
    fontSize: 48,
    justifyContent: 'center',
    fontFamily: 'Signika-Regular',
  },
  description: {
    fontSize: 16,
    margin: 20,
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
