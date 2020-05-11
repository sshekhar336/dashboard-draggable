import React from 'react';
import './App.css';
import LeftMenuContainer from './components/LeftMenuContainer/LeftMenuContainer';
import RightDataContainer from './components/RightDataContainer/RightDataContainer';

function App() {
  return (
    <div className="App">
      <div className="leftMenuContainer">
        <LeftMenuContainer />
      </div>
      <div className="rightDataContainer">
        <RightDataContainer />
      </div>
    </div>
  );
}

export default App;
