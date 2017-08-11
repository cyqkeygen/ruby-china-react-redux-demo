import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../styles/modules/Header.scss';

class Header extends React.Component {
  static propTypes = {
    routes: PropTypes.array.isRequired
  }

  renderNavigator() {}

  renderUserArea() {}

  render(){
    const { routes } = this.props;
    const links = routes.map(({path, name}, key) => 
      <Link to={path} className={styles.link} key={key}>{name}</Link>
    );
    
    return (
      <div className={styles.header}>
        {links}
      </div>
    )
  }
}

export default Header;
