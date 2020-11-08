import React, {useEffect, useState} from 'react';
import {getReport} from '../../../../config/routes';
import useAxios from 'axios-hooks';
import ReportDetails from './report_details';
import Loading from '../../../common/loading';
import {unvote, vote} from '../../../../services/vote';
import {fetchReport} from '../../../../services/fetchReport';

const ReportDetailsContainer = ({route}) => {
  const {reportId} = route.params;
  const [data, setReport] = useState(null);

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
        console.log(e.response.data);
      }
      setReport({
        ...data,
        votes: data.votes + 1,
        voteByUser: true,
      });
      return;
    }
    await unvote(reportId);
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
