import React, {useState, useEffect} from 'react';
import './App.css';
import NotiWithName from './components/NotiWithName';
import Dashbourd from './components/Dashbourd'

const App = () => {
  return (
    <div className="App">
    	<NotiWithName />
    	<Dashbourd />
    </div>
  );
}

export default App;
