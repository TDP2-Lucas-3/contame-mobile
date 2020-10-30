import React, {useState} from 'react';
import {editUser} from '../../../services/editUser';
import Loading from '../../common/loading';
import {UserProfile} from './user_profile';
import {ToastAndroid} from 'react-native';

const PROFILE_UPDATED = '¡Perfil actualizado!';

export const UserProfileContainer = (props) => {
  const {photo: defaultPhoto, firstName, lastName, email} = props.route.params;
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
      setLoading(false);
      ToastAndroid.show(PROFILE_UPDATED, ToastAndroid.LONG);
    } catch (e) {
      await setLoading(false);
    }
  };
  return loading ? (
    <Loading />
  ) : (
    <UserProfile
      photo={photo}
      imagePickerCallback={imagePickerCallback}
      email={email}
      firstName={stateFirstName}
      lastName={stateLastName}
      setFirstName={setFirstName}
      setLastName={setLastName}
      onSubmit={onSubmit}
    />
  );
};
