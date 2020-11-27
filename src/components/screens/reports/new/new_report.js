import React, {useState, useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import {getReports} from '../../../../config/routes';
import usePost from '../../../../hooks/usePost';
import COLORS from '../../../../styles/colors';
import NewReportForm from './new_report_form';

const newReportStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    flex: 1,
    justifyContent: 'flex-start',
  },
});

const NewReport = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const submit = usePost();

  const onSubmit = async () => {
    setLoading(true);
    try {
      await submit(getReports(), data);
      setData({});
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoading(false);
    }
  };

  const onChange = useCallback(
    (key, value) =>
      setData((prev) => {
        return {...prev, [key]: value};
      }),
    [setData],
  );

  return (
    <View style={newReportStyles.container}>
      <NewReportForm
        onChange={onChange}
        onSubmit={onSubmit}
        loading={loading}
        data={data}
      />
    </View>
  );
};

export default NewReport;
