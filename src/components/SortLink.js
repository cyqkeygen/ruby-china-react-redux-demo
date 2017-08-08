import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/modules/SortLink.scss';

class SortLink extends React.Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    nodeId: PropTypes.number,
    type: PropTypes.string,
    onLinkClick: PropTypes.func.isRequired
  }

  handleClick() {
    const { type, nodeId, onLinkClick } = this.props;
    onLinkClick({type, nodeId});
  }

  render(){
    const { children } = this.props;
    return (
      <span onClick={this.handleClick.bind(this)}
            className={styles.box}>
        {children}
      </span>
    )
  }
}

export default SortLink;
