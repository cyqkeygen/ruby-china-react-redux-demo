import React from 'react';
import PropTypes from 'prop-types';
import ExcellentTopics from '../containers/ExcellentTopics';
import Nodes from '../containers/Nodes';
import { Link } from 'react-router-dom';
import styles from '../styles/modules/Home.scss';

class Home extends React.Component {

  static propTypes = {
    uiSwitch: PropTypes.func.isRequired,
  }

  componentWillMount() {
    const { uiSwitch } = this.props;
    uiSwitch({
      page: 'home',
      type: 'excellent',
      nodeId: -1
    });
  }

  componentDidMount() {
    this.loadHotCities();
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

  renderHotCities() {
    return (
      <div className="box">
        <p>热门城市</p>
      </div>
    )
  }

  render(){
    const links = this.renderLinks();
    const hotCities = this.renderHotCities();
    return (
      <div>
        <div className="box">
          <p>Ruby China 官方 RubyGems 镜像、Ruby 镜像 正式上线！</p>
          <p>gem source -a https://gems.ruby-china.org</p>
        </div>
        {links}
        <ExcellentTopics />
        <Nodes />
        {hotCities}
      </div>
    )
  }
}

export default Home;
