import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TopicItem from './TopicItem';
import styles from '../styles/modules/ExcellentTopics.scss';

class ExcellentTopics extends React.Component {

  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
    receivedAt: PropTypes.number,
    fetchTopics: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { fetchTopics } = this.props;
    fetchTopics();
  }

  render(){
    const { items } = this.props;
    const length = items.length;
    return (
      <div className={styles.box}>
        <div className={styles.panel}>社区精华贴</div>
        <div className={styles.col}>
          {items.slice(0, length / 2).map( item => <TopicItem key={item.id} topic={item} />)}
        </div>
        <div className={styles.col}>
          {items.slice(length / 2).map( item => <TopicItem key={item.id} topic={item} />)}
        </div>
        <div className={styles.banner}>
          <Link to='/items/popular'>
            查看更多精华贴
          </Link>
        </div>
      </div>
    );
  }
}

export default ExcellentTopics;
