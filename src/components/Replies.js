import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { toDate } from '../lib/dateFormat';
import imageUrlReload from '../lib/imageUrlReload';
import styles from '../styles/modules/Replies.scss';

class Replies extends React.Component {

  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
    topicId: PropTypes.number.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentWillMount() {
    const { topicId, fetch } = this.props;
    fetch(topicId);
  }

  render(){
    const { isFetching, items, topicId } = this.props;
    return (
      <div className={styles.replies}>
        {
          items.map( item => {
            if (!item.action) {
              return (
                <div className={styles['reply-item']} key={item.id}>
                  <div className={styles.avatar}>
                    <img src={imageUrlReload({link: item.user.avatar_url, usage: 'avatar'})}
                        style={{width: '48px', height: '48px'}}/>
                  </div>
                  <div className={styles.infos}>
                    <div className={styles.info}>

                    </div>
                    <div className='markdown'>
                      <ReactMarkdown source={item.body} />
                    </div>
                  </div>
                </div>
              )
            } else {
              return (
                <div className={styles['excellent-item']} key={item.id}>
                  {item.user.name} 将本帖设为了精华贴 
                  <span className={styles['reply-time']}>
                    {toDate(item.created_at)}
                  </span>
                </div>
              )
            }
          }
        )}
      </div>
    )
  }
}

export default Replies;
