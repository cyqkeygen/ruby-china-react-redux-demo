import React from 'react';
import PropTypes from 'prop-types';
import TopicItem from './TopicItem';
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
        {topics.map( topic => <TopicItem topic={topic} key={topic.id}/>)}
      </div>
    )
  }

  renderRightColumn() {
    return (
      <div className={styles['right-col']}>
        <div className={styles['right-col-box']}>
          <button>
            发布新话题
          </button>
        </div>
        <div className={styles['right-col-box']}>
          <div>小贴士</div>
          <div>本站是开源的哦，访问 http://gethomeland.com 获得更多信息</div>
        </div>
        <div className={styles['right-col-box']}>
          <div>社区规则</div>
          <div>提问的智慧</div>
        </div>
        <div className={styles['right-col-box']}>
          <div>推荐Ruby镜像</div>
          <div>Ruby 镜像</div>
          <div>RubyGems 镜像</div>
          <div>Rails 视频教程</div>
          <div>Rails Guides 中文版</div>
          <div>Ruby on Rails 教程</div>
        </div>
        <div className={styles['right-col-box']}>
          <img src={rubyConfImage} className={styles.image} alt='Ruby Conf' />
        </div>
        <div className={styles['right-col-box']}>
          友情社区
          <img src={cnodeImage} className={styles.image} alt='https://cnodejs.org' />
          <img src={gocnImage} className={styles.image} alt='https://gocn.io' />
          <img src={phpHubImage} className={styles.image} alt='https://larael-china.org' />
          <img src={elixirImage} className={styles.image} alt='http://elixir.com' />
          <img src={testerHomeImage} className={styles.image} alt='https://testerhome.com' />
        </div>
        <div className={styles['right-col-box']}>
          统计信息
        </div>
      </div>
    )
  }

  render(){
    const topics = this.renderTopics();
    const rightColumn = this.renderRightColumn();
    return (
      <div>
        {topics}
        {rightColumn}
      </div>
    )
  }
}

export default Topics;
