import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Home extends React.Component {
  render(){
    return (
      <div>Home</div>
    )
  }
}

class Topics extends React.Component {
  render(){
    return (
      <div>Topics</div>
    )
  }
}

class Tops extends React.Component {
  render(){
    return (
      <div>Tops</div>
    )
  }
}

class Jobs extends React.Component {
  render(){
    return (
      <div>Jobs</div>
    )
  }
}

class Wiki extends React.Component {
  render(){
    return (
      <div>Wiki</div>
    )
  }
}

class Sites extends React.Component {
  render(){
    return (
      <div>Sites</div>
    )
  }
}

class App extends React.Component {
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

export default App;
