import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Menu from './components/Menu';
import Navigation from  './components/Navigation';

function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Navigation />
      </Router>
    </div>
  );
}

export default App;
