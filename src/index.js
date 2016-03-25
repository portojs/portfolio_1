import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        App
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
