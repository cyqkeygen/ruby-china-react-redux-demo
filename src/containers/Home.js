import { connect } from 'react-redux';
import Home from '../components/Home';

function mapStateToProps(state) {
  const { topicType, excellentTopics } = state;
  const {
    isFetching,
    lastUpdated,
    topics
  } = excellentTopics.topics
    ? excellentTopics
    : {
      isFetching: true,
      topics: []
    };

  return {
    topicType,
    isFetching,
    topics,
    lastUpdated,
  }
}

export default connect(mapStateToProps)(Home);
