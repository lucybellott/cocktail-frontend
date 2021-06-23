import React from 'react';
import './App.css';
import Homepage from './Homepage';
import {Switch, Route} from 'react-router-dom';
import AddCocktailForm from './AddCocktailForm';
import NavBar from './NavBar';
import Favorites from './Favorites';
import Banner from './Banner';

function App() {
  
  return (
    <>
    <NavBar />
    <Banner />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/form" component={AddCocktailForm} />
      <Route path="/favorites" component={Favorites} />
    </Switch>
    </>
  );
}

export default App; 
