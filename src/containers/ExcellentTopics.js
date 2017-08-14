import { connect } from 'react-redux';
import { fetchExcellentTopics } from '../actions';
import ExcellentTopics from '../components/ExcellentTopics';

function mapStateToProps(state) {
  const { topics } = state;
  const {
    isFetching,
    items,
    receivedAt
  } = topics
    ? topics
    : {
        isFetching: true,
        items: []
      };

  return {
    isFetching,
    items,
    receivedAt
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTopics: () => {
      dispatch(fetchExcellentTopics());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExcellentTopics);
