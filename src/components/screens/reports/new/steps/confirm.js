import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import COLORS from '../../../../../styles/colors';
import RalewayText from '../../../../common/raleway_text';
import {Next} from '../buttons';

const confirmStepStyles = StyleSheet.create({
  subtitle: {
    fontFamily: 'Raleway-Bold',
    color: COLORS.secondary,
    fontSize: 18,
    alignSelf: 'center',
    marginVertical: 40,
  },
  confirmTitle: {
    fontFamily: 'Raleway-Bold',
    color: COLORS.secondary,
    fontSize: 36,
    alignSelf: 'center',
    marginTop: 50,
  },
  checkIconContainer: {
    backgroundColor: 'green',
    width: 50,
    height: 50,
    marginTop: 30,
    justifyContent: 'center',
    borderRadius: 30,
    alignSelf: 'center',
  },
});

const ConfirmStep = (props) => {
  const {onSubmit} = props;

  useEffect(() => {
    onSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <RalewayText style={confirmStepStyles.confirmTitle}>¡Éxito!</RalewayText>
      <Icon
        round
        name="check"
        type="font-awesome-5"
        color="white"
        containerStyle={confirmStepStyles.checkIconContainer}
      />
      <RalewayText style={confirmStepStyles.subtitle}>
        ¡Gracias por reportar tu incidencia!
      </RalewayText>
      <Next title={'Volver'} onPress={props.onGoBack} />
    </>
  );
};

export default ConfirmStep;
