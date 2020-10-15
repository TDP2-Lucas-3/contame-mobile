import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import {getReports} from '../../../../../config/routes';
import usePost from '../../../../../hooks/usePost';
import Loading from '../../../../common/loading';

const ConfirmStep = (props) => {
  const [loading, setLoading] = useState(true);
  const submit = usePost();

  const onSubmit = async () => {
    try {
      await submit(getReports(), props.data);
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    onSubmit();
  });

  if (loading) {
    return <Loading />;
  }
  return (
    <View>
      <Text h1>¡Éxito!</Text>

      <Text>¡Gracias por reportar tu incidencia!</Text>
      <Button title={'Volver'} onPress={props.first} />
    </View>
  );
};

export default ConfirmStep;
