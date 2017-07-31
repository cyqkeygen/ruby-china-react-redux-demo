import React from 'react';
import Header from './Header';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default App;
