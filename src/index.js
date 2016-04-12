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

// helper function to add/remove class for the button corresponding
// to the current section
function highlightButton(currentButton) {
  const buttons = ['about', 'portfolio', 'contact'];
  buttons.forEach(function(button) {
    if (button === currentButton) {
      $('.' + button).find('i').addClass('highlight');
    } else {
      $('.' + button).find('i').removeClass('highlight');
    }
  });
}

// highlight nav-button corresponding to the current section
$(window).on('scroll', function() {
  const windowOffset = $(window).scrollTop(),
        aboutOffset = $('#about').offset().top - 240,
        portfolioOffset = $('#portfolio').offset().top  - 240,
        contactOffset = $('#contact').offset().top  - 240;
  if (windowOffset > contactOffset) {
    highlightButton('contact');
  } else if (windowOffset > portfolioOffset) {
    highlightButton('portfolio');
  } else if (windowOffset > aboutOffset) {
    highlightButton('about');
  }
});

// scroll to a page section after nav-button click
$('body').on('click', '.nav-bar a', function(ev) {
  ev.preventDefault();
  const $anchor = $(this);
  $('body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top}, 1000);
});


ReactDOM.render(
  <App />,
  document.getElementById('container')
);
