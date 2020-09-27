import React from 'react';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import Widgets from "./components/Widgets";
import './css/App.css';

function App() {
  return (
    <div className="app">

      <Sidebar />

      <Feed />

      <Widgets />
      
    </div>
  );
}

export default App;
