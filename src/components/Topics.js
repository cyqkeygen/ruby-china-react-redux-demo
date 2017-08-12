import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TopicItem from './TopicItem';
import TopicsTypeSorter from './TopicsTypeSorter';
import styles from '../styles/modules/Topics.scss';
import rubyConfImage from '../images/ruby_conf.png';
import cnodeImage from '../images/cnode.png';
import gocnImage from '../images/gocn.png';
import phpHubImage from '../images/php_hub.png';
import elixirImage from '../images/elixir.png';
import testerHomeImage from '../images/tester_home.png';

class Topics extends React.Component {

  static propTypes = {
    topics: PropTypes.array.isRequired,
    fetchTopics: PropTypes.func.isRequired,
    uiSwitch: PropTypes.func.isRequired
  }

  componentWillMount() {
    const { uiSwitch } = this.props;
    uiSwitch({
      page: 'topics',
      type: 'default',
      nodeId: -1
    });
  }

  componentDidMount() {
    const { fetchTopics } = this.props;
    fetchTopics({
      type: 'default',
      limit: 25,
      offset: 0
    });
  }

  renderTopics() {
    const { topics } = this.props;
    return (
      <div className={styles['left-col']}>
        <div className={styles['item-list']}>
          {topics.map( topic => <TopicItem topic={topic} key={topic.id}/>)}
        </div>
      </div>
    )
  }

  renderRightColumn() {
    return (
      <div className={styles['right-col']}>
        <div className={styles['new-topic-link']}>
          <Link to='/topics/new'>
            发布新话题
          </Link>
        </div>
        <div className={styles.panel}>
          <div className={styles['panel-head']}>小贴士</div>
          <div className={styles['panel-body']}>本站是开源的哦，访问 http://gethomeland.com 获得更多信息</div>
        </div>
        <div className={styles.panel}>
          <div className={styles['panel-head']}>社区规则</div>
          <div className={styles['panel-body']}>提问的智慧</div>
        </div>
        <div className={styles.panel}>
          <div className={styles['panel-head']}>推荐Ruby镜像</div>
          <ul className={styles['list-group']}>
            <li className={styles['list-group-item']}>Ruby 镜像</li>
            <li className={styles['list-group-item']}>RubyGems 镜像</li>
            <li className={styles['list-group-item']}>Rails 视频教程</li>
            <li className={styles['list-group-item']}>Rails Guides 中文版</li>
            <li className={styles['list-group-item']}>Ruby on Rails 教程</li>
          </ul>
        </div>
        <div className={styles.panel}>
          <img className={styles['conf-image']} src={rubyConfImage} alt='Ruby Conf' />
        </div>
        <div className={styles.panel}>
          <div className={styles['panel-head']}>友情社区</div>
          <div className={styles['image-list-group']}>
            <div className={styles['list-group-item']}>
              <a href='https://cnodejs.org'>
                <img src={cnodeImage} className={styles['site-image']} alt='https://cnodejs.org' />
              </a>
            </div>
            <div className={styles['list-group-item']}>
              <a href='https://gocn.io'>
                <img src={gocnImage} className={styles['site-image']} alt='https://gocn.io' />
              </a>
            </div>
            <div className={styles['list-group-item']}>
              <a href='https://larael-china.org'>
                <img src={phpHubImage} className={styles['site-image']} alt='https://larael-china.org' />
              </a>
            </div>
            <div className={styles['list-group-item']}>
              <a href='http://elixir.com'>
                <img src={elixirImage} className={styles['site-image']} alt='http://elixir.com' />
              </a>
            </div>
            <div className={styles['list-group-item']}>
              <a href='https://testerhome.com'>
                <img src={testerHomeImage} className={styles['site-image']} alt='https://testerhome.com' />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.panel}>
          <div className={styles['panel-head']}>
            统计信息
          </div>
          <div className={styles['list-group']}>
            <div className={styles['list-group-item']}>
              社区会员: 32564 人
            </div>
            <div className={styles['list-group-item']}>
              社区会员: 32564 人
            </div>
            <div className={styles['list-group-item']}>
              回帖数: 328143 条
            </div>
          </div>
        </div>
      </div>
    )
  }

  render(){
    const topics = this.renderTopics();
    const rightColumn = this.renderRightColumn();
    return (
      <div className='container'>
        <TopicsTypeSorter />
        {topics}
        {rightColumn}
      </div>
    )
  }
}

export default Topics;
