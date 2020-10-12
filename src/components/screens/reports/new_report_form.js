import React from 'react';
import {View} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {styles} from '../../../styles/common';

const NewReportForm = (props) => (
  <View style={styles.m_1}>
    <Input
      placeholder="Que paso?"
      onChangeText={(value) => props.onChange('title', value)}
      disabled={props.loading}
    />
    <Input
      placeholder="Donde?"
      onChangeText={(value) => props.onChange('location', value)}
      disabled={props.loading}
    />
    <Input
      placeholder="Detalles?"
      onChangeText={(value) => props.onChange('description', value)}
      disabled={props.loading}
    />
    <Button title="Contame!" onPress={props.onSubmit} loading={props.loading} />
  </View>
);

export default NewReportForm;
