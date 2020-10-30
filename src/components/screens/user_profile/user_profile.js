import {Button, ScrollView, View} from 'react-native';
import {styles} from './styles';
import {ClickableImage} from '../../common/clickable_image';
import {showImagePicker} from '../../common/image_picker';
import React from 'react';
import {ProfileField} from './profileField';

const fieldValid = (field) => {
  return field.length > 0;
};

export const UserProfile = (props) => {
  const {
    photo,
    imagePickerCallback,
    firstName,
    email,
    lastName,
    setFirstName,
    setLastName,
    onSubmit,
  } = props;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <ClickableImage
          source={{uri: photo}}
          style={styles.image}
          onPress={() => showImagePicker(imagePickerCallback)}
        />
      </View>

      <View style={styles.fields}>
        <ProfileField
          label={'Dirección de Correo'}
          defaultValue={email}
          disabled={true}
        />
        <ProfileField
          label={'Nombre'}
          defaultValue={firstName}
          onChangeText={setFirstName}
          error={!fieldValid(firstName)}
          errorText={'Este campo es obligatorio.'}
        />
        <ProfileField
          label={'Apellido'}
          defaultValue={lastName}
          onChangeText={setLastName}
          error={!fieldValid(lastName)}
          errorText={'Este campo es obligatorio.'}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          disabled={!fieldValid(firstName) || !fieldValid(lastName)}
          style={styles.button}
          onPress={onSubmit}
          title={'Confirmar'}
        />
      </View>
    </ScrollView>
  );
};
