import { connect } from 'react-redux';
import {
  uiSwitch,
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
    uiSwitch: (ui) => {
      dispatch(uiSwitch(ui));
    },
    fetchTopics: (topicsInfos, options) => {
      dispatch(fetchTopics(topicsInfos, options));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
