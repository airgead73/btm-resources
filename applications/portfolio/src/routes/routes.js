import React from 'react';

// views
import Home from '../components/views/Home';
import About from '../components/views/About';
import Work from '../components/views/Work';
import Contact from '../components/views/Contact';
import Terms from '../components/views/Terms';

const routes = [
  {
    path: '/',
    exact: true,
    view: 'home',
    render: () => {
      return(
        <Home view='home'/>
      )
    }
  },
  {
    path: '/about',
    exact: true,
    view: 'view',
    render: () => {
      return(
        <About view='about'/>
      )
    }
  }, 
  {
    path: '/work',
    exact: true,
    view: 'work',
    render: () => {
      return(
        <Work view='work'/>
      )
    }
  },   
  {
    path: '/contact',
    exact: true,
    view: 'contact',
    render: () => {
      return(
        <Contact view='contact'/>
      )
    }
  },
  {
    path: '/terms',
    exact: true,
    view: Terms,
    render: () => {
      return(
        <Terms view='terms'/>
      )
    }
  }
];

export default routes;