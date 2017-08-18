import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from '../styles/modules/TopicTypes.scss';

class TopicTypes extends React.Component {
  render(){
    return (
      <div className={styles.links}>
        <NavLink className={styles.link}
                activeClassName={styles.active}
                exact
                to='/topics'>
          默认
        </NavLink>
        <NavLink className={styles.link}
                activeClassName={styles.active}
                to='/topics/popular'>
          优质帖子
        </NavLink>
        <NavLink className={styles.link}
                activeClassName={styles.active}
                to='/topics/no_reply'>
          无人问津
        </NavLink>
        <NavLink className={styles.link}
                activeClassName={styles.active}
                to='/topics/last'>
          最新发布
        </NavLink>
      </div>
    )
  }
}

export default TopicTypes;
