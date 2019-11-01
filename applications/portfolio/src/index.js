import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';
import { ViewProvider } from './contexts/ViewContext';

ReactDOM.render(
<ViewProvider>
  <Router>
    <App/>
  </Router>
</ViewProvider>, 
document.getElementById('root'));
