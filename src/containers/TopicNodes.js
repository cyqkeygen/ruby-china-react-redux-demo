import { connect } from 'react-redux';
import { fetchNodes } from '../actions';
import TopicNodes from '../components/TopicNodes';

function mapStateToProps(state) {
  const { nodes } = state;
  const { isFetching, items, receivedAt } = nodes;
  return {
    isFetching,
    items,
    receivedAt
  };
}
function mapDispatchToProps(dispatch, state) {
  return {
    fetch: () => {
      dispatch(fetchNodes())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicNodes);
