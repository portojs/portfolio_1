import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/navbar';

import './scss/app.scss';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
