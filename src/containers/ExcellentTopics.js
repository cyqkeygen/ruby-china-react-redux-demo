import { connect } from 'react-redux';
import { fetchTopics } from '../actions';
import ExcellentTopics from '../components/ExcellentTopics';

function mapStateToProps(state) {
  const { topicsByType } = state;
  const { excellent } = topicsByType;
  const {
    isFetching,
    topics,
    receivedAt
  } = excellent
    ? excellent
    : {
      isFetching: true,
      topics: []
    };

  return {
    isFetching,
    topics,
    receivedAt
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTopics: (topicsInfos, options) => {
      dispatch(fetchTopics(topicsInfos, options));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExcellentTopics);
