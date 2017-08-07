import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TopicItem from './TopicItem';
import { fetchTopics, selectPage } from '../actions';
import styles from '../styles/modules/Home.scss';

class Home extends React.Component {

  static propTypes = {
    topics: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    selectPage: PropTypes.func.isRequired,
    fetchTopics: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { selectPage, fetchTopics } = this.props;
    selectPage('home');
    fetchTopics('home', {type: 'excellent'}, {limit: 20, offset: 0});
    this.loadNodes();
    this.loadHotCities();
  }

  loadPopularTopics() {
    const { dispatch } = this.props;
    dispatch(selectPage('home'));
  }

  loadNodes() {
    this.setState({
      nodes: []
    });
  }

  loadHotCities() {
    this.setState({
      cities: []
    });
  }

  renderLinks() {
    return (
      <div className="box">
        <Link className='topics' to='/topics'>Ruby 社区</Link>
        <Link to='/wiki'>技术文档</Link>
        <Link to='/jobs'>招聘与求职</Link>
        <Link to='/topics/popular'>精华文章</Link>
      </div>
    )
  }

  renderExcellentTopics() {
    const { topics } = this.props;
    const length = topics.length;
    return (
      <div className="box">
        <p>社区精华贴</p>
        <div className={styles['left-col']}>
          {topics.slice(0, length / 2).map( topic => <TopicItem key={topic.id} topic={topic} />)}
        </div>
        <div className={styles['right-col']}>
          {topics.slice(length / 2).map( topic => <TopicItem key={topic.id} topic={topic} />)}
        </div>
      </div>
    );
  }

  renderNodes() {
    return (
      <div className="box">
        <p>讨论节点分类导航</p>
      </div>
    )
  }

  renderHotCities() {
    return (
      <div className="box">
        <p>热门城市</p>
      </div>
    )
  }

  render(){
    const links = this.renderLinks();
    const excellentTopics = this.renderExcellentTopics();
    const nodesNavigator = this.renderNodes();
    const hotCities = this.renderHotCities();
    return (
      <div>
        <div className="box">
          <p>Ruby China 官方 RubyGems 镜像、Ruby 镜像 正式上线！</p>
          <p>gem source -a https://gems.ruby-china.org</p>
        </div>
        {links}
        {excellentTopics}
        {nodesNavigator}
        {hotCities}
      </div>
    )
  }
}

export default Home;
