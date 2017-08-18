import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactMarkdowm from 'react-markdown';
import format from '../lib/dateFormat';
import imageUrlReload from '../lib/imageUrlReload';
import styles from '../styles/modules/Topic.scss';

class Topic extends React.Component {

  static propTypes = {
    topic: PropTypes.object.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentWillMount() {
    const { match, fetch } = this.props;
    fetch(match.params.id);
  }

  render(){
    const { topic } = this.props;
    const {
      id,
      title,
      node_name,
      last_reply_user_id,
      last_reply_user_login,
      created_at,
      replied_at,
      excellent,
      likes_count,
      user,
      body,
      body_html,
      hits
    } = topic;
    const createdAt = format(created_at);
    const repliedAt = format(replied_at);
    const avatarUrl = user
      ? imageUrlReload({link: user.avatar_url, usage: 'avatar'})
      : '';
    const { name } = user ? user : {};
    const nodePath = `/topics/node${id}`;
    const userPath = `/${name}`;
    const lastReplyPath = '/${last_reply_user_login}';
    // TODO: Add Link to user and replier
    if (title) {
      return (
        <div className={styles.container}>
          <div className={styles['left-col']}>
            <div className={styles.topic}>
              <div className={styles['topic-header']}>
                <div className={styles['topic-header-content']}>
                  <div className={styles['topic-header-title']}>
                    <Link className={styles['topic-header-node']}
                          to={nodePath}>
                          {node_name}
                    </Link>
                    {title}
                  </div>
                  <div className={styles['topic-header-info']}>
                    <Link className={styles['topic-associate-name']}
                          to={userPath}>
                      {name}
                    </Link>
                    {'  ·  发布于  '}
                    <span>{createdAt}</span>
                    {'  ·  最后由  '}
                    <Link className={styles['topic-associate-name']}
                          to={lastReplyPath}>
                      {'  '}
                      {last_reply_user_id}
                      {'  '}
                    </Link>
                    {'  回复于  '}
                    <span>
                      {'  '}
                      {repliedAt}
                      {'  '}
                    </span>
                    <span>{hits}</span>
                    {'  次阅读  '}
                  </div>
                </div>
                <div className={styles.avatar}>
                  <img src={avatarUrl} width='48' height='48'/>
                </div>
              </div>
              <div className={styles['topic-body']}>
                <ReactMarkdowm source={body} />
              </div>
            </div>
          </div>
          <div className={styles['right-col']}>
            <div>{likes_count}</div>
          </div>
        </div> 
      )
    } else {
      return (<div className={styles.container}></div>)
    }
    
  }
}

export default Topic;
