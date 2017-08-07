import { connect } from 'react-redux';
import {
  selectPage,
  fetchTopics
} from '../actions';
import Home from '../components/Home';

function mapStateToProps(state) {
  const { types } = state;
  const { excellent } = types;
  const {
    isFetching,
    receiveAt,
    topics
  } = excellent
    ? excellent
    : {
      isFetching: true,
      topics: []
    };

  return {
    isFetching,
    topics,
    receiveAt,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectPage: (page) => {
      dispatch(selectPage(page));
    },
    fetchTopics: (page, topicsInfos, options) => {
      dispatch(fetchTopics(page, topicsInfos, options));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
