import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TopicItem from './TopicItem';
import TopicTypes from './TopicTypes';
import TopicNodes from '../containers/TopicNodes';
import NodeInstruction from './NodeInstruction';
import styles from '../styles/modules/Topics.scss';
import rubyConfImage from '../images/ruby_conf.png';
import cnodeImage from '../images/cnode.png';
import gocnImage from '../images/gocn.png';
import phpHubImage from '../images/php_hub.png';
import elixirImage from '../images/elixir.png';
import testerHomeImage from '../images/tester_home.png';

/*  
 *  Topics组件被使用时，总体上分为2种情况：
 *  1. 被节点【社区】使用时，需要加入一个2级分类栏
 *  2. 被节点比如【招聘],【新手问题】(node52)使用时，需要插入一个节点说明栏。
 *  所以需要检测组件传入的props属性。
 *  1. 如果props.match.params.sub为 undefined, 'popular', 'no_reply',
 *  'recent'，则加入2级分类栏。
 *  2. 如果props.match.params.sub为 'nodeXX',则插入一个节点说明栏。
 *  最后需要对sub的信息进行区分，并使用不同参数调用fetchTopics action
 *  */
class Topics extends React.Component {

  static propTypes = {
    fetchTopics: PropTypes.func.isRequired,
    fetchNode: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    node: PropTypes.object.isRequired,
    uiSwitch: PropTypes.func.isRequired
  }

  constructor() {
    super();
    this.state = {
      nodesShow: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location !== nextProps.location) {
      this.fetchSource(nextProps);
    }
  }

  componentDidMount() {
    const { uiSwitch, fetchTopics, match } = this.props;
    uiSwitch({
      page: 'topics',
      type: 'default',
      nodeId: -1
    });
    this.fetchSource();
  }

  fetchSource(nextProps) {
    this.getTopics(nextProps);
    this.getNode(nextProps);
  }

  getTopics(nextProps) {
    const { fetchTopics } = this.props;
    const { match } = nextProps ? nextProps : this.props;
    fetchTopics(match);
  }

  getNode(nextProps) {
    const { fetchNode } = this.props;
    const { match } = nextProps ? nextProps : this.props;
    const { params } = match;
    const { id } = params;
    if (id) fetchNode(id);
  }

  handleNodeBtnClick() {
    this.setState({
      nodesShow: !this.state.nodesShow
    });
  }

  renderTopics() {
    const { items } = this.props;
    return (
      <div className={styles['left-col']}>
        <div className={styles['item-list']}>
          {items.map( item => <TopicItem topic={item} key={item.id}/>)}
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
    const { isFetching, match, path, node } = this.props;
    const { params } = match;
    const { id } = params;
    const topics = isFetching
      ? (<div className={styles['left-col']}></div>)
      : this.renderTopics();
    
    const { nodesShow } = this.state;

    /* 
     * TODO: Use a modal box to replace nodes sorter.
     * */
    const nodesBtnStyles = nodesShow ? 'show-nodes-all' : 'hide-nodes-all';
    const nav = id 
      ? <NodeInstruction node={node}/>
      : <div className={styles.sorter}>
          <div className={styles['inner-sorter']}>
            <div className={styles['nodes-box']}>
              <div className={styles['nodes-btn']}
                   onClick={this.handleNodeBtnClick.bind(this)}>
                所有节点
              </div>
            </div>
            <TopicTypes />
          </div>
        </div>;
    const rightColumn = this.renderRightColumn();
    return (
      <div className='container-wrapper'>
        <div className={styles[nodesBtnStyles]}>
          <TopicNodes />
        </div>
        {nav}
        <div className='container'>
          {topics}
          {rightColumn}
        </div>
      </div>
      
    )
  }
}

export default Topics;
