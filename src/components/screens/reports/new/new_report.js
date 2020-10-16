import React, {useState} from 'react';
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
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      <NewReportForm
        onChange={(key, value) =>
          setData((prev) => {
            return {...prev, [key]: value};
          })
        }
        onSubmit={onSubmit}
        loading={loading}
        data={data}
      />
    </View>
  );
};

export default NewReport;
