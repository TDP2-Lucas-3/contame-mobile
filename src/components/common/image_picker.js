import ImagePicker from 'react-native-image-picker';

export const showImagePicker = (callback) => {
  const options = {
    title: 'Selecciona una opcion',
    chooseFromLibraryButtonTitle: 'Seleccionar desde mi galeria',
    takePhotoButtonTitle: 'Sacar una foto',
    cancelButtonTitle: 'Cancelar',
  };
  ImagePicker.showImagePicker(options, callback);
};
