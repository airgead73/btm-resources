import React from 'react';

// views
import Home from '../components/views/Home';
import About from '../components/views/About';
import Work from '../components/views/Work';
import Contact from '../components/views/Contact';
import Terms from '../components/views/Terms';

import WorkModality from '../components/views/WorkModality';
import WorkCategory from '../components/views/WorkCategory';

export const routes = [
	{
		path: '/',
    exact: true,
    component: () => { return (<Home view='home'/>)}  
	},
	{   
		path: '/about',
		exact: true,
    component: () => { return (<About view='about'/>)}
	},
	{
		path: '/work',
		exact: true,
    component: () => { return (<Work view='work'/>)}
	},
	{
		path: '/contact',
		exact: true,
    component: () => { return (<Contact view='contact'/>)}
	},
	{
		path: '/terms',
		exact: true,
    component: () => { return (<Terms view='terms'/>)}
  },
  {
    path: '/work/:modality',
    exact: false,
    component: () => { return (<WorkModality/>)}
  },
  {
    path: '/work/:modality/:category',
    exact: false,
    component: () => { return (<WorkModality/>)}
  }

	
];
