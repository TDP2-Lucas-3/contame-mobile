import React, {useState, useCallback} from 'react';
import {View} from 'react-native';
import {getReports} from '../../../../config/routes';
import usePost from '../../../../hooks/usePost';
import NewReportForm from './new_report_form';

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
    <View>
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
