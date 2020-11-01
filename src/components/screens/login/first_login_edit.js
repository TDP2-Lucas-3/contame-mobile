import {Text, View} from 'react-native';
import {styles} from '../../../styles/first_login_edit_user_data';
import {ClickableImage} from '../../common/clickable_image';
import {showImagePicker} from '../../common/image_picker';
import {Input, Icon, Button} from 'react-native-elements';
import React from 'react';

export const FirstLoginEdit = (props) => {
  const {imagePickerCallback, userData, onChange, onSubmit, loading} = props;
  console.log(userData.photo);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Antes de comenzar, podés editar tus datos...
      </Text>

      <View style={styles.imageContainer}>
        <ClickableImage
          source={{uri: userData.photoToShow}}
          style={styles.image}
          onPress={() => showImagePicker(imagePickerCallback)}
        />
      </View>

      <Text style={styles.label}>Nombre</Text>
      <Input
        defaultValue={userData.firstName}
        onChangeText={(value) => onChange('firstName', value)}
      />

      <Text style={styles.label}>Apellido</Text>
      <Input
        defaultValue={userData.lastName}
        onChangeText={(value) => onChange('lastName', value)}
      />

      <Button
        onPress={onSubmit}
        title={'Comenzar!'}
        loading={loading}
        disabled={loading}
      />
    </View>
  );
};
