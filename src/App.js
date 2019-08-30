import React from 'react';
import './App.css';
import Login from './components/Login.js';
import Register from './components/Register.js';
import '../src/css/Login.css';
import '../src/css/Register.css';
import '../src/components/Skill.js';
import '../src/components/ProjectInProfile.js';

function App() {
  return (
    <div className="App">
     <Login/>
     <Register/>

    </div>
  );
}

export default App;
