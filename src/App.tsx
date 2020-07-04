import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import Movie from './pages/Movie';

function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie/:id" component={Movie} />
    </Router>
  );
}


export default App;
