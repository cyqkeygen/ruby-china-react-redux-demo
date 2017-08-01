import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import Topics from './Topics';
import Headlines from './Headlines';
import Jobs from './Jobs';
import Sites from './Sites';
import Wiki from './Wiki';

const routes = [
  { path: '/', name: '首页', component: Home},
  { path: '/topics', name: '社区', component: Topics},
  { path: '/headlines', name: '头条', component: Headlines},
  { path: '/jobs', name: '招聘', component: Jobs},
  { path: '/wiki', name: 'Wiki', component: Wiki},
  { path: '/sites', name: '酷站', component: Sites},
];

class Header extends React.Component {
  render(){
    const links = routes.map(({path, name}, key) => <li key={key}><Link to={path}>{name}</Link></li>);
    const routeComponents = routes.map(({path, component}, key) => path === '/'
        ? <Route exact path={path} component={component} key={key} />
        : <Route path={path} component={component} key={key} />
    );
    return (
      <Router>
        <div>
          <ul>{links}</ul>
          {routeComponents}
        </div>
      </Router>
    )
  }
}

export default Header;
