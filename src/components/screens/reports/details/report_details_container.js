import React, {useEffect, useState} from 'react';
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

  const votesDisabled = data && data.user.email === user.email;

  const onVotePress = async () => {
    if (votesDisabled) {
      // can't vote yourself
      return;
    }

    if (!data.voteByUser) {
      setReport({
        ...data,
        votes: data.votes + 1,
        voteByUser: true,
      });
      try {
        await vote(reportId);
      } catch (e) {
        ToastAndroid.show(e.response.data.message, ToastAndroid.LONG);
        return;
      }
      return;
    }
    setReport({
      ...data,
      votes: data.votes - 1,
      voteByUser: false,
    });
    try {
      await unvote(reportId);
    } catch (e) {
      ToastAndroid.show(e.response.data.message, ToastAndroid.LONG);
    }
  };

  return !data ? (
    <Loading />
  ) : (
    <ReportDetails
      onVotePress={onVotePress}
      report={data}
      votesDisabled={votesDisabled}
    />
  );
};

export default ReportDetailsContainer;
