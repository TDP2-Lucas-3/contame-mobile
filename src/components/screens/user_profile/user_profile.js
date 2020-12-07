import {ScrollView, View} from 'react-native';
import {styles} from './styles';
import {styles as commonStyles} from '../../../styles/common';
import {ClickableImage} from '../../common/clickable_image';
import {showImagePicker} from '../../common/image_picker';
import React from 'react';
import {Input, Button} from 'react-native-elements';

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
    loading,
  } = props;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={commonStyles.m_2}>
        <ClickableImage
          source={{uri: photo}}
          style={styles.image}
          onPress={() => showImagePicker(imagePickerCallback)}
        />

        <Input
          disabled={true}
          defaultValue={email}
          label="Email"
          labelStyle={commonStyles.color_secondary}
        />

        <Input
          defaultValue={firstName}
          onChangeText={setFirstName}
          renderErrorMessage={!fieldValid(firstName)}
          errorMessage={
            !fieldValid(firstName) ? 'Este campo es obligatorio.' : ''
          }
          errorStyle={styles.errorText}
          label="Nombre"
          labelStyle={commonStyles.color_secondary}
          containerStyle={commonStyles.mb_3}
        />

        <Input
          defaultValue={lastName}
          onChangeText={setLastName}
          renderErrorMessage={!fieldValid(lastName)}
          errorMessage={
            !fieldValid(lastName) ? 'Este campo es obligatorio.' : ''
          }
          errorStyle={styles.errorText}
          label="Apellido"
          labelStyle={commonStyles.color_secondary}
        />

        <Button
          disabled={!fieldValid(firstName) || !fieldValid(lastName) || loading}
          style={styles.button}
          onPress={onSubmit}
          title={'Confirmar'}
          buttonStyle={styles.button}
          titleStyle={commonStyles.raleway}
          loading={loading}
        />
      </ScrollView>
    </View>
  );
};
