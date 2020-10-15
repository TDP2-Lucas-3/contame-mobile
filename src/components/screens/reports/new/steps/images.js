import React, {useState} from 'react';
import {View} from 'react-native';
import {Text, Button, colors} from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import {styles} from '../../../../../styles/common';
import ImageIcon from '../../../../common/image_icon';

const ImagesStep = (props) => {
  const [images, setImages] = useState([]);

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

      setImages([
        ...images,
        {
          uri: 'data:image/jpeg;base64,' + response.data,
          name: response.fileName,
        },
      ]);
    });
  };

  const onRemoveImage = (image) => {
    const newImages = images.filter(
      (currentImage) => currentImage.name !== image.name,
    );

    setImages(newImages);
  };

  return (
    <View style={[styles.spaceAround, styles.fullH]}>
      <View style={styles.alignCenter}>
        <Text style={styles.pb_2}>Sacaste Fotos?</Text>
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
        <View style={[styles.row, styles.alignSelfCenter, styles.pb_2]}>
          {images.map((image) => (
            <ImageIcon
              key={image.name}
              name={image.name}
              onRemove={() => onRemoveImage(image)}
            />
          ))}
        </View>
      </View>
      <Button title="Siguiente" onPress={props.onNext} />
    </View>
  );
};

export default ImagesStep;
