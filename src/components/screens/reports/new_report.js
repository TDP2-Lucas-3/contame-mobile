import React, {useState} from 'react';
import NewReportForm from './new_report_form';
import {getReports} from '../../../config/routes';
import usePost from '../../../hooks/usePost';

const NewReport = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const submit = usePost();

  const onSubmit = async () => {
    setLoading(true);
    try {
      await submit(getReports(), data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <NewReportForm
      onChange={(key, value) => setData({...data, [key]: value})}
      onSubmit={onSubmit}
      loading={loading}
    />
  );
};

export default NewReport;
