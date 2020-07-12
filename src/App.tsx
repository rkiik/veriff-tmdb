import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './features/Home';
import Movie from './features/Movie';

const App: React.FC = () => {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/movie/:id" component={Movie} />
        </Router>
    );
};

export default App;
