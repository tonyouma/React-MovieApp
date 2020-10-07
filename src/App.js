import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="main">
    <BrowserRouter>
      <Route path="/" exact component={Movies} />
      <Route path="/MovieDetails/:id" component={MovieDetails} />
    </BrowserRouter>
    </div>
  );
}

export default App;
