import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import styles from '../styles/modules/Header.scss';

const headerLinks = [
  {path: '/', name: 'Ruby China'},
  {path: '/topics', name: '社区'},
  {path: '/topics/jobs', name: '招聘'},
  {path: '/wiki', name: 'Wiki'},
  {path: '/sites', name: '酷站'},
  {path: '/gems', name: 'Gems'}
];

class Header extends React.Component {
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

  /*  
   *  <Link> no longer has the activeClassName or activeStyle properties.
   *  In react-router v4 you have to use <NavLink>
   *  Refer to: https://stackoverflow.com/questions/41131450/active-link-with-react-router
   *            https://reacttraining.com/react-router/web/api/NavLink
   *  */
  render(){
    const links = headerLinks.map(({path, name}, key) =>
      key === 0
        ? this.renderFirstLinkElem(path, key)
        : <NavLink className={styles.link}
                   activeClassName={styles.active}
                   to={path}
                   exact
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
    );
  }
}

export default Header;
