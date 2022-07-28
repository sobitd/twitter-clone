import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import MainFeedBox from './Components/MainFeedBox';

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <MainFeedBox />

    </div>
  );
}

export default App;
