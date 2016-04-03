import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/navbar';
import TitleBar from './components/title-bar';
import PageAbout from './components/page-about';
import PagePortfolio from './components/page-portfolio';
import PageContact from './components/page-contact';

import './scss/app.scss';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <PageAbout />
        <PagePortfolio />
        <PageContact />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
