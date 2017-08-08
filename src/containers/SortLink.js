import { connect } from 'react-redux';
import SortLink from '../components/SortLink';

function mapDispatchToProps(dispatch) {
  return {
    onLinkClick: (topicsInfos, options) => {
      dispatch(fetchTopics(topicsInfos, options))
    }
  }
}

export default connect(null, mapDispatchToProps)(SortLink);
