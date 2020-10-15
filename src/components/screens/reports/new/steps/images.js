import React from 'react';
import {View} from 'react-native';
import {Text, Button, colors} from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import { styles } from '../../../../../styles/common';

const ImagesStep = (props) => {
  return (
    <View style={styles.alignCenter}>
      <Text style={styles.p_2}>Sacaste Fotos?</Text>
      <Button
        title="Adjuntar imagenes"
        icon={{
          name: 'camera',
          type: 'font-awesome',
          color: colors.primary,
        }}
        type="clear"
        titleStyle={styles.link}
      />
    </View>
  );
};

export default ImagesStep;
