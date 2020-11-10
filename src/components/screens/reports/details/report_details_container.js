import React, {useEffect, useState} from 'react';
import {getReport} from '../../../../config/routes';
import useAxios from 'axios-hooks';
import ReportDetails from './report_details';
import Loading from '../../../common/loading';
import {unvote, vote} from '../../../../services/vote';
import {fetchReport} from '../../../../services/fetchReport';
import {useSelector} from 'react-redux';
import {ToastAndroid} from 'react-native';

const ReportDetailsContainer = ({route}) => {
  const {reportId} = route.params;
  const [data, setReport] = useState(null);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    (async () => {
      const report = await fetchReport(reportId);
      setReport(report.data);
    })();
  }, [reportId]);

  const onVotePress = async () => {
    if (!data.voteByUser) {
      try {
        await vote(reportId);
      } catch (e) {
        ToastAndroid.show(e.response.data.message, ToastAndroid.LONG);
        return;
      }
      setReport({
        ...data,
        votes: data.votes + 1,
        voteByUser: true,
      });
      return;
    }
    try {
      await unvote(reportId);
    } catch (e) {
      ToastAndroid.show(e.response.data.message, ToastAndroid.LONG);
      return;
    }
    setReport({
      ...data,
      votes: data.votes - 1,
      voteByUser: false,
    });
  };

  return !data ? (
    <Loading />
  ) : (
    <ReportDetails onVotePress={onVotePress} report={data} />
  );
};

export default ReportDetailsContainer;
