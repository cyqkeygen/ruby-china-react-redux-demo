import { connect } from 'react-redux';
import Topics from '../components/Topics';
import {
  identifyPositive,
  uiSwitch,
  fetchTopics
} from '../actions';

function mapStateToProps(state) {
  const { uiSwitch, topicsByType, topicsByNode } = state;
  const { page, type, nodeId } = uiSwitch;
  let source, child;
  if (identifyPositive(nodeId)) {
    source = topicsByNode;
    child = nodeId;
  } else {
    source = topicsByType;
    child = type;
  }
  const {
    isFetching,
    topics,
    receivedAt
  } = source[child] || {
    isFetching: true,
    topics: []
  }

  return {
    isFetching,
    topics,
    receivedAt
  }
}

function mapDispatchToProps(dispatch, state) {
  return {
    uiSwitch: (ui) => {
      dispatch(uiSwitch(ui))
    },
    fetchTopics: (topicsInfos, options) => {
      dispatch(fetchTopics(topicsInfos, options))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topics);
