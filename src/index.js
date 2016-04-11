import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/navbar';
import TitleBar from './components/title-bar';
import PageAbout from './components/page-about';
import PagePortfolio from './components/page-portfolio';
import PageContact from './components/page-contact';
import Footer from './components/footer.js';

import './scss/app.scss';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <PageAbout />
        <PagePortfolio />
        <PageContact />
        <Footer />
      </div>
    );
  }
}

$('body').on('click', '.nav-bar a', function(ev) {
  ev.preventDefault();
  const $anchor = $(this);
  $('body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top}, 1000);
});

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
