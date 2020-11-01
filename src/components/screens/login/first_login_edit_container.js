import React, {useEffect, useState} from 'react';
import {editUser} from '../../../services/editUser';
import {FirstLoginEdit} from './first_login_edit';
import {useDispatch} from 'react-redux';
import {saveConfig} from '../../../redux/actions/config';
import {saveUserData} from '../../../redux/actions/user';
import {useSelector} from 'react-redux';

export const FirstLoginEditContainer = () => {
  const user = useSelector((state) => state.user);

  const [userData, setUserData] = useState({});
  useEffect(() => setUserData({...user, photoToShow: user.photo}), [user]);

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const imagePickerCallback = (response) => {
    if (response.didCancel || response.error) {
      return;
    }

    setUserData({
      ...userData,
      photo: response.data,
      photoToShow: `data:image/jpeg;base64,${response.data}`,
    });
  };

  const onSubmit = async () => {
    setLoading(true);
    try {
      await editUser(userData);
      dispatch(
        saveUserData({
          name: userData.firstName,
          surname: userData.lastName,
          photo: userData.photoToShow,
          email: userData.email,
        }),
      );
      dispatch(saveConfig({firstLogin: false}));
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  return (
    <FirstLoginEdit
      imagePickerCallback={imagePickerCallback}
      userData={userData}
      onChange={(key, value) => setUserData({...userData, [key]: value})}
      onSubmit={onSubmit}
      loading={loading}
    />
  );
};
