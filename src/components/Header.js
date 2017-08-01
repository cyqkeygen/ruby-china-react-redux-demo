import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  static propTypes = {
    routes: PropTypes.array.isRequired
  }

  render(){
    const { routes } = this.props;
    const links = routes.map(({path, name}, key) => <li key={key}><Link to={path}>{name}</Link></li>);
    
    return (
      <ul>{links}</ul>
    )
  }
}

export default Header;
