import React, {useState} from 'react';
import {View} from 'react-native';
import {Text, Button, colors} from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import {styles} from '../../../../../styles/common';

const ImagesStep = (props) => {
  const [images, setImages] = useState('');

  const onAttachImages = () => {
    const options = {
      title: 'Selecciona una opcion',
      chooseFromLibraryButtonTitle: 'Seleccionar desde mi galeria',
      takePhotoButtonTitle: 'Sacar una foto',
      cancelButtonTitle: 'Cancelar',
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel || response.error) {
        return;
      }

      setImages([...images, {uri: response.uri}]);
    });
  };

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
        onPress={onAttachImages}
      />
    </View>
  );
};

export default ImagesStep;
