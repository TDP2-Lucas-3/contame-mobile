import {Button, Text, View} from 'react-native';
import {styles} from './styles';
import {ClickableImage} from '../../common/clickable_image';
import {showImagePicker} from '../../common/image_picker';
import {Input} from 'react-native-elements';
import React from 'react';

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
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ClickableImage
          source={{uri: photo}}
          style={styles.image}
          onPress={() => showImagePicker(imagePickerCallback)}
        />
      </View>

      <View style={styles.fields}>
        <Text style={styles.label}>Dirección de correo</Text>
        <Input defaultValue={email} disabled={true} />
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
      </View>

      <View style={styles.buttonContainer}>
        <Button style={styles.button} onPress={onSubmit} title={'Confirmar'} />
      </View>
    </View>
  );
};
