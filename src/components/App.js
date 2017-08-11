import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import routes from '../routes';
import '../../src/styles/common/app.scss';

class App extends React.Component {
  render(){
    const routeComponents = routes.map(({path, component}, key) => path === '/'
        ? <Route exact path={path} component={component} key={key} />
        : <Route path={path} component={component} key={key} />
    );

    return (
      <Router>
        <div>
          <Header routes={routes} />
          <div className='container'>
            {routeComponents}
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
