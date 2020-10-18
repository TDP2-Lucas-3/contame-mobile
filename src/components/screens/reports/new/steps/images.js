import React, {useEffect, useState} from 'react';
import {View, ToastAndroid} from 'react-native';
import {Text, Button, colors} from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import {styles} from '../../../../../styles/common';
import ImageIcon from '../../../../common/image_icon';

const MAX_IMAGE_ERROR_MSG = 'Podés subir hasta 5 imágenes';
const MAX_IMAGE_COUNT = 5;

const ImagesStep = (props) => {
  const [images, setImages] = useState([]);
  const {onChange} = props;

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

      if (images.length >= MAX_IMAGE_COUNT) {
        ToastAndroid.show(MAX_IMAGE_ERROR_MSG, ToastAndroid.LONG);
        return;
      }

      setImages([
        ...images,
        {
          data: response.data,
          name: response.fileName,
        },
      ]);
    });
  };

  useEffect(() => {
    onChange(
      'images',
      images.map((image) => image.data),
    );
  }, [images]);

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
        <View
          style={[
            styles.row,
            styles.alignSelfStart,
            styles.pb_2,
            styles.flexWrap,
          ]}>
          {images.map((image) => (
            <ImageIcon
              key={image.name}
              name={image.name}
              onRemove={() => onRemoveImage(image)}
            />
          ))}
        </View>
      </View>
      <Button title={'Contame!'} onPress={props.onNext} />
    </View>
  );
};

export default ImagesStep;
