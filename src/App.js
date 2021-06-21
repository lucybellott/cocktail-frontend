import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from './NavBar'
import CocktailList from './CocktailList'
import Search from './Search'


function App() {
  const [drinks, setDrinks] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3000/drinks')
    .then(resp => resp.json())
    .then(data => setDrinks(data))

  }, [])
  
  return (
    <div className="App">
      <NavBar />
      <Search />
      <CocktailList drinks={drinks} />

    </div>
  );
}

export default App; 
