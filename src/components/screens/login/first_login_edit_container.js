import React, {useState} from 'react';
import {editUser} from '../../../services/editUser';
import Loading from '../../common/loading';
import {FirstLoginEdit} from './first_login_edit';

export const FirstLoginEditContainer = ({navigation, route}) => {
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
      await setLoading(false);
    }
  };
  return loading ? (
    <Loading />
  ) : (
    <FirstLoginEdit
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
