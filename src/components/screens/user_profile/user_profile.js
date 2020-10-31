import {Button, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import {ClickableImage} from '../../common/clickable_image';
import {showImagePicker} from '../../common/image_picker';
import React from 'react';
import {Input} from 'react-native-elements';

const fieldValid = (field) => {
  return field && field.length > 0;
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
      <ClickableImage
        source={{uri: photo}}
        style={styles.image}
        onPress={() => showImagePicker(imagePickerCallback)}
      />

      <Text style={styles.label}>{'Dirección de Correo'}</Text>
      <Input disabled={true} defaultValue={email} />

      <Text style={styles.label}>{'Nombre'}</Text>
      <Input
        defaultValue={firstName}
        onChangeText={setFirstName}
        renderErrorMessage={!fieldValid(firstName)}
        errorText={'Este campo es obligatorio.'}
        errorStyle={styles.errorText}
      />
      {!fieldValid(firstName) && (
        <Text style={styles.errorText}>Este campo es obligatorio.</Text>
      )}

      <Text style={styles.label}>{'Apellido'}</Text>
      <Input
        defaultValue={lastName}
        onChangeText={setLastName}
        renderErrorMessage={!fieldValid(lastName)}
        errorText={'Este campo es obligatorio.'}
        errorStyle={styles.errorText}
      />
      {!fieldValid(lastName) && (
        <Text style={styles.errorText}>Este campo es obligatorio.</Text>
      )}

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
