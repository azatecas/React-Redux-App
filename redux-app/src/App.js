import React from 'react';
import './App.css';
// import { connect } from 'react-redux';
import GetInfo from './components/GetInfo';
import GetInfoList from './components/GetInfoList';

function App() {
  return (
    <div className="App">
      <h1>MY APP</h1>
      <GetInfo />
      <div className="container">
        <GetInfoList />
      </div>
    </div>
  );
}

export default App;
