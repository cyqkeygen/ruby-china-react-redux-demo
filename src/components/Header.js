import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import styles from '../styles/modules/Header.scss';

class Header extends React.Component {
  static propTypes = {
    routes: PropTypes.array.isRequired
  }

  renderNavigator() {}

  renderUserArea() {}

  renderFirstLinkElem(path, key) {
    return (
      <Link className={styles.firstLink}
            to={path}
            key={key}>
        <b>Ruby</b>
        {'  China'}
      </Link>
    );
  }

  render(){
    const { routes } = this.props;

    const links = routes.map(({path, name, isFirst}, key) =>
      isFirst
        ? this.renderFirstLinkElem(path, key)
        : <NavLink className={styles.link}
                   activeClassName={styles.active}
                   to={path}
                   key={key}>
            {name}
          </NavLink>
    );
    
    return (
      <div className={styles.header}>
        <div className={styles.links}>
          {links}
        </div>
      </div>
    )
  }
}

export default Header;
