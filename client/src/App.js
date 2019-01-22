import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import IndexComponent from './components/IndexComponent';
import DetailComponent from './/componentDetailComponent';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">

          <Route path="/" exact component={IndexComponent} />
          <Route path="/detail/:id" component={DetailComponent} />
        </div>
      </Router>

    );
  }
}

export default App;
