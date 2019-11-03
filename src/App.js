import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './containers/Home';
import Favorites from './containers/Favorites'
import Movie from './containers/Movie'
import NavbarTop from './components/NavbarTop'
import Footer from './components/Footer'

import './App.css';
 

function App() {
  return (
    <BrowserRouter>
     <div className="App">
        <NavbarTop/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/favorites" component={Favorites}/>
            <Route exact path="/m/:id" component={Movie}/>
          </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
