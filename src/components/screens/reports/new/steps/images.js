import React, {useEffect, useState} from 'react';
import {View, ToastAndroid} from 'react-native';
import {Text, Button, colors} from 'react-native-elements';
import {styles} from '../../../../../styles/common';
import ImageIcon from '../../../../common/image_icon';
import {showImagePicker} from '../../../../common/image_picker';

const MAX_IMAGE_ERROR_MSG = 'Podés subir hasta 5 imágenes';
const MAX_IMAGE_COUNT = 5;

const ImagesStep = (props) => {
  const [images, setImages] = useState([]);
  const {onChange} = props;

  const imagePickerCallback = (response) => {
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
  };

  useEffect(() => {
    onChange(
      'images',
      images.map((image) => image.data),
    );
  }, [images, onChange]);

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
          onPress={() => showImagePicker(imagePickerCallback)}
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
              image={`data:image/jpeg;base64,${image.data}`}
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
