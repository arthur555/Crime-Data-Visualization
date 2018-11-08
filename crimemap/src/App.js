import React from 'react';
import ReactDOM from 'react-dom';
import About from './menu/About';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Header } from './menu/Header';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
        </div>
      </Router>
    );
  }
}

export { App };
