import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar'
import Home from './components/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
