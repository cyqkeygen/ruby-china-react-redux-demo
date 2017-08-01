import React from 'react';
import Header from './Header';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import routes from './routes';

class App extends React.Component {
  render(){
    const routeComponents = routes.map(({path, component}, key) => path === '/'
        ? <Route exact path={path} component={component} key={key} />
        : <Route path={path} component={component} key={key} />
    );

    return (
      <Router>
        <div>
          <Header routes={routes}/>
          {routeComponents}
        </div>
      </Router>
    )
  }
}

export default App;
