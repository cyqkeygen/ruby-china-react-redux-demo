import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TopicItem from './TopicItem';
import styles from '../styles/modules/ExcellentTopics.scss';

class ExcellentTopics extends React.Component {

  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    topics: PropTypes.array.isRequired,
    receivedAt: PropTypes.number,
    fetchTopics: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { fetchTopics } = this.props;
    fetchTopics({type: 'excellent'}, {limit: 20, offset: 0});
  }

  render(){
    const { topics } = this.props;
    const length = topics.length;
    return (
      <div className={styles.box}>
        <div className={styles.title}>社区精华贴</div>
        <div className={styles.col}>
          {topics.slice(0, length / 2).map( topic => <TopicItem key={topic.id} topic={topic} />)}
        </div>
        <div className={styles.col}>
          {topics.slice(length / 2).map( topic => <TopicItem key={topic.id} topic={topic} />)}
        </div>
        <div className={styles.banner}>
          <Link to='/topics/popular'>
            查看更多精华贴
          </Link>
        </div>
      </div>
    );
  }
}

export default ExcellentTopics;
