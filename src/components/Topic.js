import React from 'react';
import PropTypes from 'prop-types';

class Topic extends React.Component {

  static propTypes = {
    topic: PropTypes.object.isRequired
  }

  render(){
    const { topic } = this.props;
    return (
      <li className="box">
        <img alt={topic.user.name} src={topic.user.avatar_url} height='50px' width='50px' />
        <span>{topic.node_name}</span>
        <span>{topic.title}</span>
        <span>{topic.last_reply_user_login}</span>
        <span>{topic.replied_at}</span>
        <span>{topic.replies_count}</span>
      </li>
    )
  }
}

export default Topic;
