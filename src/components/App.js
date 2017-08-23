import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route
} from 'react-router-dom';
import routes from '../routes';
import '../../src/styles/common/app.scss';

class App extends React.Component {
  render(){
    const getTopics = (Component) => ({match}) => {
      return <Component />
    }
    /*  
     *  1. Route 传入exact时，只会渲染(render)完全匹配的component
     *
     *  请看下表:
     *  path          |  location.pathname  |    matches?
     *  ---------------------------------------------------
     *  /topics       |  /topics            |    yes
     *  ---------------------------------------------------
     *  /topics       |  /topics/           |    no
     *  ---------------------------------------------------
     *  /topics       |  /topics/popular    |    no
     *  ---------------------------------------------------
     *  /topics/:sub  |  /topics            |    no
     *  ---------------------------------------------------
     *  /topics/:sub  |  /topics/popular    |    yes
     *  ---------------------------------------------------
     *
     *
     *  2. 如果不传入exact，则所有匹配的component都会被渲染(render)
     *  
     *  3. 如果嵌套在<Switch> 中，不传入exact，则只会渲染第一个匹配的component
     *
     *  Refer to: https://reacttraining.com/react-router/web/api/Route
     *  */
    const Routes = routes.map(
      ({path, strict, component}, key) =>
        path === '/topics/:sub'
          ? <Route exact strict={strict} path={path} component={component} key={key} />
          : <Route exact strict={strict} path={path} component={component} key={key} />
    );

    const supportsHistory = 'pushState' in window.history;

    return (
      <Router basename="/"
              forceRefresh={!supportsHistory}>
        <div>
          <Header />
          <Switch>
            {Routes}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
