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
      <div className={styles.box}>
        <div className={styles['image-out']}>
          <span><img className={styles.image} alt={topic.user.name} src={topic.user.avatar_url}/></span>
        </div>
        <div className={styles.infos}>
          <div className={styles.title}>
            <span>{topic.node_name}</span>
            <span className={styles['title-text']}>{topic.title}</span>
          </div>
          <div className={styles.info}>
            <span className={styles['info-item']}>{topic.last_reply_user_login}</span>
            <span className={styles['info-item']}>{topic.replied_at}</span>
          </div>
        </div>
        <div className={styles['replies-count']}>
          <span className={styles['count-num']}>{topic.replies_count}</span>
        </div>
      </div>
    )
  }
}

export default TopicItem;
