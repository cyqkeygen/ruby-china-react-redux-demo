import { connect } from 'react-redux';
import { fetchReplies } from '../actions';
import Replies from '../components/Replies'

function mapStateToProps(state) {
  const { replies } = state;
  console.log(replies)
  const {
    isFetching,
    items,
  } = replies
    ? replies
    : {
      isFetching: false,
      items: []
    };

  return {
    isFetching,
    items
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetch: (topicId) => {
      dispatch(fetchReplies(topicId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Replies);
