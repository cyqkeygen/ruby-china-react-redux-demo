import React from 'react';
import PropTypes from 'prop-types';
import format from '../lib/dateFormat';
import styles from '../styles/modules/TopicItem.scss';

class TopicItem extends React.Component {

  static propTypes = {
    topic: PropTypes.object.isRequired
  }

  render(){
    const { topic } = this.props;
    const time = format(topic.replied_at);
    const info = topic.last_reply_user_login
      ? (
          <div className={styles.info}>
            <span className={styles['info-item']}>{topic.user.name}</span>
            <span className={styles['info-item']}> •  最后由 {topic.last_reply_user_login}</span>
            <span className={styles['info-item']}>回复于 {time}</span>
          </div>
        )
      : (<div></div>);
    return (
      <div className={styles.box}>
        <div className={styles['avatar-box']}>
          <span><img className={styles.avatar} alt={topic.user.name} src={topic.user.avatar_url}/></span>
        </div>
        <div className={styles.infos}>
          <div className={styles.title}>
            <span className={styles['node-name']}>{topic.node_name}</span>
            <span className={styles['title-text']}>{topic.title}</span>
          </div>
          {info}
        </div>
        <div className={styles['replies-count']}>
          <span className={styles['count-num']}>{topic.replies_count}</span>
        </div>
      </div>
    )
  }
}

export default TopicItem;
