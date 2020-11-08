import {StyleSheet} from 'react-native';
import {colors} from 'react-native-elements';

export const styles = StyleSheet.create({
  report_details_footer: {
    padding: 15,
    zIndex: 9,
  },
});
export const notVotedStyles = StyleSheet.create({
  voteIcon: {
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    width: 75,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'white',
  },
  counter: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export const alreadyVotedStyles = StyleSheet.create({
  voteIcon: {
    ...notVotedStyles.voteIcon,
    borderColor: colors.primary,
  },
  counter: {
    ...notVotedStyles.counter,
    color: colors.primary,
  },
});
