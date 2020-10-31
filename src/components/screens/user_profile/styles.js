import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    width: 175,
    height: 175,
    marginTop: 50,
    marginBottom: 50,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    margin: 5,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 30,
  },
  errorText: {
    color: 'red',
  },
});
