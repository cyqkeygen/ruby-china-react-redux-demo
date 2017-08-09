import { connect } from 'react-redux';
import { fetchNodes } from '../actions';
import Nodes from '../components/Nodes';

function mapStateToProps(state) {
  const { nodes } = state;
  const { isFetching, items, receivedAt } = nodes;
  return {
    isFetching,
    items,
    receivedAt
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetch: () => {
      dispatch(fetchNodes())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Nodes);
