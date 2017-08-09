import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/modules/Nodes.scss';

class Nodes extends React.Component {

  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
    receivedAt: PropTypes.number,
    fetch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

  render(){
    const { items } = this.props;
    return (
      <div className='box'>
        <p>讨论节点分类导航</p>
        { items.map(item => <span key={item.id} className={styles.box}>{item.id}</span>)}
      </div>
    )
  }
}

export default Nodes;
