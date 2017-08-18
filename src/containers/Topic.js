import { connect } from 'react-redux';
import Topic from '../components/Topic';
import { fetchTopic } from '../actions';

function mapStateToProps(state) {
  const { currentTopic } = state;
  const {
    isFetching,
    topic,
    receivedAt
  } = currentTopic
    ? currentTopic
    : {
      isFetching: false,
      topic: {}
    }

  return {
    isFetching,
    topic,
    receivedAt
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetch: (topicId) => {
      dispatch(fetchTopic(topicId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
