import {StyleSheet} from 'react-native';
import COLORS from '../../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.main,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 50,
    marginBottom: 50,
    alignSelf: 'center',
    borderRadius: 50,
  },
  label: {
    fontSize: 20,
    margin: 5,
    fontWeight: 'bold',
  },
  button: {
    width: 150,
    height: 50,
    marginTop: 30,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: COLORS.secondary,
    elevation: 4,
  },
  errorText: {
    color: 'red',
  },
});
