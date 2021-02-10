import React from 'react'
import { Route } from 'react-router-dom';

import MainPage from './pages/main/MainPage';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Route path="/" component={MainPage} />
    </div>
  );
}

export default App;
