import {StyleSheet} from 'react-native';
import { colors } from 'react-native-elements';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
  },
  imageContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  default_image: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    backgroundColor: colors.grey4,
    padding: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
