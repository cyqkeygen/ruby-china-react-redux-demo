import React from 'react';
import PropTypes from 'prop-types';
import ExcellentTopics from '../containers/ExcellentTopics';
import Nodes from '../containers/Nodes';
import Cities from './Cities';
import { Link } from 'react-router-dom';
import styles from '../styles/modules/Home.scss';

const cards = [
  {url: '/topics', content: 'Ruby 社区'},
  {url: '/wiki', content: '技术文档'},
  {url: '/jobs', content: '招聘与求职'},
  {url: '/topics/popular', content: '精华文章'},
];

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

  renderLinks() {
    return (
      <div className={styles['card-box']}>
        {cards.map((card, i) => 
          <div key={i} className={styles.out}>
            <div className={styles.card}>
              <div className={styles['link-out']}>
                <Link className={styles.link} to={card.url}>{card.content}</Link>
              </div>
              <div className={styles.text}>{card.content}</div>
            </div>
          </div>
        )}
      </div>
    )
  }

  render(){
    const links = this.renderLinks();
    return (
      <div>
        <div className={styles.banner}>
          <div>Ruby China 官方 RubyGems 镜像、Ruby 镜像 正式上线！</div>
          <div>gem source -a https://gems.ruby-china.org</div>
        </div>
        {links}
        <ExcellentTopics />
        <Nodes />
        <Cities />
      </div>
    )
  }
}

export default Home;
