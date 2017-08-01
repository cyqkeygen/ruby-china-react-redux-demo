import React from 'react';
import { Link } from 'react-router-dom';
import Topic from './Topic';
import { topics } from './topics.json';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      popularTopics: []
    }
  }
  componentWillMount() {
    this.loadPopularTopics();
  }

  loadPopularTopics() {
    this.setState({
      popularTopics: topics
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
    const { popularTopics } = this.state;
    return (
      <div className="box">
        <p>社区精华贴</p>
        {popularTopics.map( topic => <Topic key={topic.id} topic={topic} />)}
      </div>
    );
  }

  render(){
    const links = this.renderLinks();
    const popularTopics = this.renderPopularTopics();
    return (
      <div>
        <div className="box">
          <p>Ruby China 官方 RubyGems 镜像、Ruby 镜像 正式上线！</p>
          <p>gem source -a https://gems.ruby-china.org</p>
        </div>
        {links}
        {popularTopics}
      </div>
    )
  }
}

export default Home;
