import React from 'react';
import MovieCard from './Components/MovieCard';
import "./Components/style.css";
import MovieList from './Components/MovieList';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import Description from './Components/Description';
// import Navbar from './Components/Navbar';
import {HashRouter as Router} from "react-router-dom";

function App () {
  return (
    <>
    <Router>
      <div>
      <MovieCard />
       {/* <Navbar /> 
        <Route path="/" element={Home} />
        <Route path="/movie/:id" component={Description} /> */}
        </div>
        </Router>
        </>

    
  )
}

export default App;
