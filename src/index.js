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

// scroll to a page section after nav-button click
$('body').on('click', '.nav-bar a', function(ev) {
  ev.preventDefault();
  const $anchor = $(this);
  $('body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top}, 1000);
});

// nav-button is highlighted when a corresponding page section is reached
$(window).on('scroll', function() {
  const windowOffset = $(window).scrollTop(),
        aboutOffset = $('#about').offset().top,
        portfolioOffset = $('#portfolio').offset().top,
        contactOffset = $('#contact').offset().top,
        aboutButton = $('.contact').find('i'),
        portfolioButton = $('.portfolio').find('i'),
        contactButton = $('.contact').find('i');
  console.log(windowOffset, portfolioOffset);
  if (windowOffset > contactOffset) {
    contactButton.addClass('highlight');
    portfolioButton.removeClass('highlight');
    aboutButton.removeClass('highlight');
  } else if (windowOffset > portfolioOffset) {
    portfolioButton.addClass('highlight');
    contactButton.removeClass('highlight');
    aboutButton.removeClass('highlight');
  } else if (windowOffset > aboutOffset) {
    aboutButton.addClass('highlight');
    contactButton.removeClass('highlight');
    portfolioButton.removeClass('highlight');
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
