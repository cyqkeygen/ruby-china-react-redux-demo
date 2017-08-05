import React from 'react';
import styles from '../styles/modules/Topics.scss';

class Topics extends React.Component {

  renderTopics() {
    return (
      <div className={styles['left-col']}>
        col-left
      </div>
    )
  }

  renderRightColumn() {
    return (
      <div className={styles['right-col']}>
        <div>
          <button>
            发布新话题
          </button>
        </div>
        <div>
          <div>小贴士</div>
          <div>本站是开源的哦，访问 http://gethomeland.com 获得更多信息</div>
        </div>
        <div>
          <div>推荐Ruby镜像</div>
          <div>Ruby 镜像</div>
          <div>RubyGems 镜像</div>
          <div>Rails 视频教程</div>
          <div>Rails Guides 中文版</div>
          <div>Ruby on Rails 教程</div>
        </div>
        <div>
          友情社区
        </div>
        <div>
          统计信息
        </div>
      </div>
    )
  }

  render(){
    const topics = this.renderTopics();
    const rightColumn = this.renderRightColumn();
    console.log(topics)
    return (
      <div>
        {topics}
        {rightColumn}
      </div>
    )
  }
}

export default Topics;
