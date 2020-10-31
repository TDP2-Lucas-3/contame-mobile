import React, {useEffect, useState} from 'react';
import {editUser} from '../../../services/editUser';
import Loading from '../../common/loading';
import {FirstLoginEdit} from './first_login_edit';
import {connect, useDispatch} from 'react-redux';
import {saveConfig} from '../../../redux/actions/config';
import {saveUserData} from '../../../redux/actions/user';
import {fetchUser} from '../../../services/fetchUser';

const FirstLoginEditContainer = (props) => {
  const [photo, setPhoto] = useState(props.photo);
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [photoData, setPhotoData] = useState(undefined);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFirstName(props.firstName);
    setLastName(props.lastName);
    setPhoto(props.photo);
  }, [props.firstName, props.lastName, props.photo]);

  const dispatch = useDispatch();

  const imagePickerCallback = (response) => {
    if (response.didCancel || response.error) {
      return;
    }

    setPhoto(response.uri);
    setPhotoData(response.data);
  };

  const onSubmit = async () => {
    await setLoading(true);
    try {
      const userData = {
        name: firstName,
        surname: lastName,
      };
      console.log(userData);

      await editUser(userData);
      const resp = await fetchUser();
      console.log(resp.data);
      dispatch(saveConfig({firstLogin: false}));
      dispatch(saveUserData(userData));
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
      firstName={firstName}
      lastName={lastName}
      setFirstName={setFirstName}
      setLastName={setLastName}
      onSubmit={onSubmit}
    />
  );
};

function mapStateToProps(state) {
  return {
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    photo: state.user.photo,
  };
}

export default connect(mapStateToProps)(FirstLoginEditContainer);
