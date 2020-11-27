import React, {useEffect, useState} from 'react';
import {View, ToastAndroid, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import ImageIcon from '../../../../common/image_icon';
import {showImagePicker} from '../../../../common/image_picker';
import {Next, Back} from '../buttons';
import RalewayText from '../../../../common/raleway_text';
import wizardStyles from '../styles';
import COLORS from '../../../../../styles/colors';

const MAX_IMAGE_ERROR_MSG = 'Podés subir hasta 5 imágenes';
const MAX_IMAGE_COUNT = 5;

const imageStepStyles = StyleSheet.create({
  imagesButtonContainer: {
    marginTop: 50,
  },
  imagesButtonTitle: {
    color: COLORS.secondary,
    textDecorationLine: 'underline',
  },
  imagesThumb: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    flexWrap: 'wrap',
    height: 110,
  },
});

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
    <View style={imageStepStyles.container}>
      <RalewayText style={wizardStyles.title}>¿Sacaste Fotos?</RalewayText>
      <Button
        title="Agregar Fotos"
        icon={{
          name: 'camera',
          type: 'font-awesome',
          color: COLORS.secondary,
        }}
        type="clear"
        titleStyle={imageStepStyles.imagesButtonTitle}
        containerStyle={imageStepStyles.imagesButtonContainer}
        onPress={() => showImagePicker(imagePickerCallback)}
      />
      <View style={imageStepStyles.imagesThumb}>
        {images.map((image) => (
          <ImageIcon
            image={`data:image/jpeg;base64,${image.data}`}
            key={image.name}
            name={image.name}
            onRemove={() => onRemoveImage(image)}
          />
        ))}
      </View>
      <Next title={'¡Contame!'} onPress={props.onNext} />
      <Back onPress={props.onBack} />
    </View>
  );
};

export default ImagesStep;
