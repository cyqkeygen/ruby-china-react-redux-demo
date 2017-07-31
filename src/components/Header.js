import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import Jobs from './Jobs';
import Sites from './Sites';
import Topics from './Topics';
import Tops from './Tops';
import Wiki from './Wiki';

class Header extends React.Component {
  render(){
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/'>首页</Link></li>
            <li><Link to='/topics'>社区</Link></li>
            <li><Link to='/tops'>头条</Link></li>
            <li><Link to='/jobs'>招聘</Link></li>
            <li><Link to='/wiki'>Wiki</Link></li>
            <li><Link to='/sites'>酷站</Link></li>
          </ul>
          <Route exact path='/' component={Home}/>
          <Route path='/topics' component={Topics}/>
          <Route path='/tops' component={Tops}/>
          <Route path='/jobs' component={Jobs}/>
          <Route path='/wiki' component={Wiki}/>
          <Route path='/sites' component={Sites}/>
        </div>
      </Router>
    )
  }
}

export default Header;
