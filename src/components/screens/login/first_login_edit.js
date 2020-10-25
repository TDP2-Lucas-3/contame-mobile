import {Button, Text, View} from 'react-native';
import {styles} from '../../../styles/first_login_edit_user_data';
import {ClickableImage} from '../../common/clickable_image';
import {showImagePicker} from '../../common/image_picker';
import {Input} from 'react-native-elements';
import React from 'react';

export const FirstLoginEdit = (props) => {
  const {
    photo,
    imagePickerCallback,
    firstName,
    lastName,
    setFirstName,
    setLastName,
    onSubmit,
  } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Antes de comenzar, podés editar tus datos...
      </Text>

      <View style={styles.imageContainer}>
        <ClickableImage
          source={{uri: photo}}
          style={styles.image}
          onPress={() => showImagePicker(imagePickerCallback)}
        />
      </View>

      <Text style={styles.label}>Nombre</Text>
      <Input
        defaultValue={firstName}
        onChangeText={(value) => setFirstName(value)}
      />

      <Text style={styles.label}>Apellido</Text>
      <Input
        defaultValue={lastName}
        onChangeText={(value) => setLastName(value)}
      />

      <Button onPress={onSubmit} title={'Comenzar!'} />
    </View>
  );
};
