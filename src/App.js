import React from 'react';
import './App.css';
import Homepage from './Homepage';
import {Switch, Route} from 'react-router-dom';
import AddCocktailForm from './AddCocktailForm';
import NavBar from './NavBar';


function App() {
  
  return (
    <>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/form" component={AddCocktailForm} />
    </Switch>
    </>
  );
}

export default App; 
