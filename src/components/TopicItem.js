import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/modules/TopicItem.scss';

class TopicItem extends React.Component {

  static propTypes = {
    topic: PropTypes.object.isRequired
  }

  render(){
    const { topic } = this.props;
    return (
      <li className="box">
        <img alt={topic.user.name} src={topic.user.avatar_url} height='50px' width='50px' />
        <div className={styles['node-box']}>{topic.node_name}</div>
        <span>{topic.title}</span>
        <span>{topic.last_reply_user_login}</span>
        <span>{topic.replied_at}</span>
        <span>{topic.replies_count}</span>
      </li>
    )
  }
}

export default TopicItem;
