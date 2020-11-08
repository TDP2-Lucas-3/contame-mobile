import React from 'react';
import {getReport} from '../../../../config/routes';
import useAxios from 'axios-hooks';
import ReportDetails from './report_details';
import Loading from '../../../common/loading';
import {unvote, vote} from '../../../../services/vote';

const ReportDetailsContainer = ({route}) => {
  const {reportId} = route.params;
  const [{data, loading}] = useAxios(getReport(reportId));

  const onVotePress = async () => {
    if (!data.voteByUser) {
      await vote(reportId);
      data.votes += 1;
      data.voteByUser = true;
      return;
    }
    await unvote(reportId);
    data.votes -= 1;
    data.voteByUser = false;
  };

  return loading ? (
    <Loading />
  ) : (
    <ReportDetails onVotePress={onVotePress} report={data} />
  );
};

export default ReportDetailsContainer;
