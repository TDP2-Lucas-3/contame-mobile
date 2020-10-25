import {Button, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Input} from 'react-native-elements';
import {styles} from '../../../styles/first_login_edit_user_data';
import {ClickableImage} from '../../common/clickable_image';
import {showImagePicker} from '../../common/image_picker';
import {editUser} from '../../../services/editUser';

export const FirstLoginEdit = ({navigation, route}) => {
  const {photo, firstName, lastName} = route.params;
  const defaultImage = require('../../../../assets/images/no_image.jpeg');

  const [image, setImage] = useState(photo);
  const [stateFirstName, setFirstName] = useState(firstName);
  const [stateLastName, setLastName] = useState(lastName);
  const imagePickerCallback = (response) => {
    if (response.didCancel || response.error) {
      return;
    }

    setImage(response.uri);
  };

  const onSubmit = async () => {
    try {
      await editUser({
        firstName: stateFirstName,
        lastName: stateLastName,
        photo,
      });
      navigation.navigate('Nueva incidencia');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Antes de comenzar, podés editar tus datos...
      </Text>

      <View style={styles.imageContainer}>
        <ClickableImage
          defaultSource={defaultImage}
          source={{uri: image}}
          style={styles.image}
          onPress={() => showImagePicker(imagePickerCallback)}
        />
      </View>

      <Text style={styles.label}>Nombre</Text>
      <Input
        defaultValue={stateFirstName}
        onChangeText={(value) => setFirstName(value)}
      />

      <Text style={styles.label}>Apellido</Text>
      <Input
        defaultValue={stateLastName}
        onChangeText={(value) => setLastName(value)}
      />

      <Button onPress={onSubmit} title={'Comenzar!'} />
    </View>
  );
};
