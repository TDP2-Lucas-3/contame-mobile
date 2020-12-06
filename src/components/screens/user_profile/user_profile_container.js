import React, {useState} from 'react';
import {editUser} from '../../../services/editUser';
import {UserProfile} from './user_profile';
import {ToastAndroid} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {saveUserData} from '../../../redux/actions/user';

const PROFILE_UPDATED = '¡Perfil actualizado!';

export const UserProfileContainer = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const {photo: defaultPhoto, firstName, lastName, email} = user;
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
      const {data} = await editUser({
        firstName: stateFirstName,
        lastName: stateLastName,
        photo: statePhoto,
      });
      setLoading(false);
      ToastAndroid.show(PROFILE_UPDATED, ToastAndroid.LONG);
      dispatch(
        saveUserData({
          name: data.name,
          surname: data.surname,
          photo: data.photo,
          email,
        }),
      );
    } catch (e) {
      await setLoading(false);
      console.log(e);
    }
  };
  return (
    <UserProfile
      photo={photo}
      imagePickerCallback={imagePickerCallback}
      email={email}
      firstName={stateFirstName}
      lastName={stateLastName}
      setFirstName={setFirstName}
      setLastName={setLastName}
      onSubmit={onSubmit}
      loading={loading}
    />
  );
};
