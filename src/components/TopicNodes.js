import React from 'react';
import PropTypes from 'prop-types';
import NodesPartial from './NodesPartial';

class TopicNodes extends React.Component {

  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
    receivedAt: PropTypes.number,
    fetch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { items, fetch } = this.props;
    if (items.length <= 0) fetch();
  }

  render(){
    const { items } = this.props;
    const props = {
      partialHeadContent: '选择话题节点',
      page: 'topics',
      nodes: items
    }
    return (
      <NodesPartial {...props} />
    )
  }
}

export default TopicNodes;
