import React from 'react';
import PropTypes from 'prop-types';
import SortLink from '../containers/SortLink';
import styles from '../styles/modules/TopicTypeSorter.scss';

class TopicsTypeSorter extends React.Component {
  render(){
    return (
      <div className={styles.box}>
        <SortLink type='default'>默认</SortLink>
        <SortLink type='popular'>优质帖子</SortLink>
        <SortLink type='no_reply'>无人问津</SortLink>
        <SortLink type='last'>最新发布</SortLink>
      </div>
    )
  }
}

export default TopicsTypeSorter;
