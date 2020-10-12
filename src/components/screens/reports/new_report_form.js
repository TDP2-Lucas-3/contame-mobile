import React from 'react';
import {View} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {styles} from '../../../styles/common';

const NewReportForm = (props) => (
  <View style={styles.m_1}>
    <Input
      testID="title_input"
      placeholder="Que paso?"
      onChangeText={(value) => props.onChange('title', value)}
      disabled={props.loading}
    />
    <Input
      testID="location_input"
      placeholder="Donde?"
      onChangeText={(value) => props.onChange('location', value)}
      disabled={props.loading}
    />
    <Input
      testID="description_input"
      placeholder="Detalles?"
      onChangeText={(value) => props.onChange('description', value)}
      disabled={props.loading}
    />
    <Button
      title="Contame!"
      onPress={props.onSubmit}
      loading={props.loading}
      testID="submit_button"
    />
  </View>
);

export default NewReportForm;
