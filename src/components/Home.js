import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Topic from './Topic';
import { fetchTopics } from '../actions';

class Home extends React.Component {

  static propTypes = {
    topics: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.loadPopularTopics();
    this.loadNodes();
    this.loadHotCities();
  }

  loadPopularTopics() {
    const { dispatch } = this.props;
    dispatch(fetchTopics('excellent'));
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

  renderPopularTopics() {
    const { topics } = this.props;
    console.log(topics)
    return (
      <div className="box">
        <p>社区精华贴</p>
        {topics.map( topic => <Topic key={topic.id} topic={topic} />)}
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
    const popularTopics = this.renderPopularTopics();
    const nodesNavigator = this.renderNodes();
    const hotCities = this.renderHotCities();
    return (
      <div>
        <div className="box">
          <p>Ruby China 官方 RubyGems 镜像、Ruby 镜像 正式上线！</p>
          <p>gem source -a https://gems.ruby-china.org</p>
        </div>
        {links}
        {popularTopics}
        {nodesNavigator}
        {hotCities}
      </div>
    )
  }
}

export default Home;
