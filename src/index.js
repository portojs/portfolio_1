import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/navbar';
import TitleBar from './components/title-bar';

import './scss/app.scss';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <TitleBar />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
