import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from './NavBar'
import CocktailList from './CocktailList'
import Search from './Search'


function Homepage() {
  const [drinks, setDrinks] = useState([])
  const [search, setSearch] = useState("");
  
  const searchCocktails = () => {
  
    const newSearchCocktails  = drinks.filter(drink => {
  
       let ingredientsArray = drink.ingredients.filter(ingredientString => {
         return ingredientString.toLowerCase().includes(search.toLowerCase()) 
      })

      return ingredientsArray.length > 0
    })

    return newSearchCocktails
  }

  useEffect(() => {
    fetch('http://localhost:3000/drinks')
    .then(resp => resp.json())
    .then(data => setDrinks(data))

  }, [])
  
  return (
    <div className="App">
      <Search search={search} setSearch={setSearch} />
      {drinks.length > 0 ? <CocktailList drinks={searchCocktails()} /> : <img src="https://img.pikbest.com/58pic/35/39/61/62K58PICb88i68HEwVnm5_PIC2018.gif" />}
      

    </div>
  );
}

export default Homepage; 
