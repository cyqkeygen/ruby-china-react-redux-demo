import { connect } from 'react-redux';
import { uiSwitch, fetchTopics } from '../actions';
import SortLink from '../components/SortLink';

function mapDispatchToProps(dispatch) {
  return {
    onLinkClick: (topicsInfos, options) => {
     const { type, nodeId } = topicsInfos;
      dispatch(uiSwitch({
        page: 'topics',
        type,
        nodeId
      }));
      dispatch(fetchTopics(topicsInfos, options))
    }
  }
}

export default connect(null, mapDispatchToProps)(SortLink);
