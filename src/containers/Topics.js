import { connect } from 'react-redux';
import Topics from '../components/Topics';
import {
  uiSwitch,
  fetchTopics,
  fetchNode
} from '../actions';

function mapStateToProps(state) {
  const { topics, currentNode } = state;
  const {
    isFetching,
    items,
    receivedAt
  } = topics || {
    isFetching: true,
    items: []
  };

  const { node } = currentNode;

  return {
    isFetching,
    items,
    receivedAt,
    node
  }
}

function mapDispatchToProps(dispatch, state) {
  return {
    uiSwitch: (ui) => {
      dispatch(uiSwitch(ui))
    },
    fetchTopics: (infos, options) => {
      dispatch(fetchTopics(infos, options))
    },
    fetchNode: (nodeId) => {
      dispatch(fetchNode(nodeId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topics);
