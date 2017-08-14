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

  componentWillMount() {
    const { fetchTopics } = this.props;
    fetchTopics();
  }

  componentDidMount() {
  }

  render(){
    const { items, isFetching } = this.props;
    const length = items.length;
    if (isFetching) {
      return (
        <div>
          loading
        </div>
      )
    } else {
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
}

export default ExcellentTopics;
