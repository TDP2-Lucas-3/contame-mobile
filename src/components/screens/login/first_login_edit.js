import {Button, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Input} from 'react-native-elements';
import {styles} from '../../../styles/first_login_edit_user_data';
import {ClickableImage} from '../../common/clickable_image';
import {showImagePicker} from '../../common/image_picker';
import {editUser} from '../../../services/editUser';
import {photoToBase64} from '../../../utils/photo_to_base64';
import Loading from '../../common/loading';
import {LoginEdit} from './login_edit';

export const FirstLoginEdit = ({navigation, route}) => {
  const {photo: defaultPhoto, firstName, lastName} = route.params;
  const noImage = require('../../../../assets/images/no_image.jpeg');

  const [photo, setPhoto] = useState(defaultPhoto || noImage);
  const [stateFirstName, setFirstName] = useState(firstName);
  const [stateLastName, setLastName] = useState(lastName);
  const [statePhoto, setStatePhoto] = useState(null);

  const [loading, setLoading] = useState(false);

  const imagePickerCallback = (response) => {
    if (response.didCancel || response.error) {
      return;
    }
    console.log(response.data);
    setPhoto(response.uri);
    setStatePhoto(response.data);
  };

  const onSubmit = async () => {
    await setLoading(true);
    try {
      await editUser({
        firstName: stateFirstName,
        lastName: stateLastName,
        photo: statePhoto,
      });
      navigation.navigate('Nueva incidencia');
    } catch (e) {
      console.log(e);
      await setLoading(false);
    }
  };
  return loading ? (
    <Loading />
  ) : (
    <LoginEdit
      photo={photo}
      imagePickerCallback={imagePickerCallback}
      firstName={stateFirstName}
      lastName={stateLastName}
      setFirstName={setFirstName}
      setLastName={setLastName}
      onSubmit={onSubmit}
    />
  );
};
