import React, {useEffect, useState} from 'react';
import ReportDetails from './report_details';
import Loading from '../../../common/loading';
import {unvote, vote} from '../../../../services/vote';
import {postComment} from '../../../../services/comment';
import {fetchReport} from '../../../../services/fetchReport';
import {useSelector} from 'react-redux';
import {ToastAndroid} from 'react-native';
import Share from 'react-native-share';
import {generateReportLink} from '../../../../services/deepLinking';

const ReportDetailsContainer = ({route}) => {
  const {reportId} = route.params;
  const [data, setReport] = useState(null);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

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

  const onPostComment = async () => {
    try {
      setLoading(true);
      const response = await postComment(comment, reportId);
      setReport({
        ...data,
        comments: [...data.comments, response.data],
      });
    } catch (e) {
      console.log('Error al crear comentario', e);
    } finally {
      setLoading(false);
    }
  };

  const onShareTo = async (socialNetwork) => {
    const shareOptions = {
      message: `Ayudame con tu voto! \n${generateReportLink(data.id)}`,
      social: socialNetwork,
    };
    Share.shareSingle(shareOptions);
  };

  return !data ? (
    <Loading />
  ) : (
    <ReportDetails
      onVotePress={onVotePress}
      report={data}
      votesDisabled={votesDisabled}
      onPostComment={onPostComment}
      onChangeComment={(newComment) => setComment(newComment)}
      currentComment={comment}
      loading={loading}
      onShareTo={onShareTo}
    />
  );
};

export default ReportDetailsContainer;
