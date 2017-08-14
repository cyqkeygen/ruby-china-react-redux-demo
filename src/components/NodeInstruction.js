import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/modules/NodeInstruction.scss';

class NodeInstruction extends React.Component {

  static propTypes = {
    // node: PropTypes.shape({
      // name: PropTypes.string.isRequired,
      // topicsCount: PropTypes.number.isRequired,
      // summary: PropTypes.string.isRequired
    // })
    node: PropTypes.object
  }

  renderSummaries(summary) {
    const summaries = summary
      ? summary.split('\r\n\r\n')
      : '';
    if (summary) {
      return summaries.map((s, i) => <p key={i}>{s}</p>)
    } else {
      return <p></p>
    }
  }

  render(){
    const { node } = this.props
    if ( !node ) {
      return (<div className={styles.containers}></div>)
    } else {
      const { name, topics_count, summary } = node;
      const summaries = this.renderSummaries(summary);
      return (
        <div className={styles.container}>
          <div className={styles.instruction}>
            <div className={styles.title}>
              <span>{name}</span>
              <span className={styles.count}>共有 {topics_count} 个讨论主题</span>
            </div>
            <div className={styles.summary}>
              {summaries}
            </div>
          </div>
        </div>
      )
    }
  }
}

export default NodeInstruction;
