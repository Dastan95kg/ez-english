import React from 'react'
import { Route } from 'react-router-dom';

import MainPage from './pages/main/MainPage';
import StartPage from './pages/start/StartPage';
import VocabularyPage from './pages/vocabulary/VocabularyPage';
import LevelDefinePage from './pages/level-define/LevelDefinePage';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Route path="/" exact component={MainPage} />
      <Route path="/start" exact component={StartPage} />
      <Route path="/vocabulary" exact component={VocabularyPage} />
      <Route path="/level-define" exact component={LevelDefinePage} />
    </div>
  );
}

export default App;
