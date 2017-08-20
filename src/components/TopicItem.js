import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { format } from '../lib/dateFormat';
import imageUrlReload from '../lib/imageUrlReload';
import styles from '../styles/modules/TopicItem.scss';

class TopicItem extends React.Component {

  static propTypes = {
    topic: PropTypes.object.isRequired
  }

  render(){
    const { topic } = this.props;
    const {
      id,
      user,
      last_reply_user_login,
      replied_at,
      replies_count,
      node_name,
      title
    } = topic;
    const { name, avatar_url } = user;
    const time = format(replied_at);
    const avatarUrl = imageUrlReload({link: avatar_url, usage: 'avatar'});
    const path = `/topics/${id}`;
    const info = last_reply_user_login
      ? (
          <div className={styles.info}>
            <span className={styles['info-item']}>{name}</span>
            <span className={styles['info-item']}> •  最后由 {last_reply_user_login}  </span>
            回复于 
            <span className={styles['info-reply']}> {time}</span>
          </div>
        )
      : (<div></div>);
    return (
      <div className={styles.box}>
        <div className={styles['avatar-box']}>
          <span><img className={styles.avatar} alt={topic.user.name} src={avatarUrl}/></span>
        </div>
        <div className={styles.infos}>
          <div className={styles.title}>
            <Link className={styles['title-link']}
                  to={path}>
              <span className={styles['node-name']}>{node_name}</span>
              {title}
            </Link>
          </div>
          {info}
        </div>
        <div className={styles['replies-count']}>
          <span className={styles['count-num']}>{replies_count}</span>
        </div>
      </div>
    )
  }
}

export default TopicItem;
