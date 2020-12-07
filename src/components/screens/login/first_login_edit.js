import {Text, View, ScrollView} from 'react-native';
import {styles} from '../../../styles/first_login_edit_user_data';
import {ClickableImage} from '../../common/clickable_image';
import {showImagePicker} from '../../common/image_picker';
import {Input, Button} from 'react-native-elements';
import React from 'react';

export const FirstLoginEdit = (props) => {
  const {imagePickerCallback, userData, onChange, onSubmit, loading} = props;
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>
            Antes de comenzar, podés editar tus datos...
          </Text>
          <View style={styles.header_divider} />
        </View>

        <View style={styles.form_container}>
          <View style={styles.imageContainer}>
            <ClickableImage
              source={{uri: userData.photoToShow}}
              style={styles.image}
              onPress={() => showImagePicker(imagePickerCallback)}
            />
          </View>

          <Input
            defaultValue={userData.firstName}
            onChangeText={(value) => onChange('firstName', value)}
            label="Nombre"
            labelStyle={styles.label}
          />

          <Input
            defaultValue={userData.lastName}
            onChangeText={(value) => onChange('lastName', value)}
            label="Apellido"
            labelStyle={styles.label}
          />

          <Button
            onPress={onSubmit}
            title={'Comenzar!'}
            loading={loading}
            disabled={loading}
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
          />
        </View>
      </ScrollView>
    </View>
  );
};
