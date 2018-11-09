import React from 'react';
import ReactDOM from 'react-dom';
import About from './menu/About';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Header } from './menu/Header';
import MapArea from './MapArea';
import './App.css';

class App extends React.Component {
  state = {
    currentCity: null
  };

  render() {
    const { currentCity } = this.state;
    return (
      <Router>
        <Header
          currentCity={currentCity}
          cities={['Durham', 'Nashville', 'SF']}
          onCitySelected={city => this.setState({ currentCity: city })}
        />
        <MapArea />
      </Router> //*
    );
  }
}

export { App };
