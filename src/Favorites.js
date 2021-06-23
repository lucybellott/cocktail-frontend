import React, {useState, useEffect} from 'react';
import './App.css';
import CocktailList from './CocktailList'
import Search from './Search'


function Favorites() {
  const [drinks, setDrinks] = useState([])
  const [search, setSearch] = useState("");
  const [sorted, setSort] = useState(false)
  
  document.title = "Favorites"
  
    const searchCocktails = drinks.filter(drink => {
  
       let ingredientsArray = drink.ingredients.filter(ingredientString => {
         return ingredientString.toLowerCase().includes(search.toLowerCase()) 
      })

      return ingredientsArray.length > 0
    })


  useEffect(() => {
    fetch('http://localhost:3000/drinks')
    .then(resp => resp.json())
    .then(data => {
        const favorited = data.filter(favDrink => favDrink.favorited === true)
        setDrinks(favorited)
    })

  }, [])

  const handleSortClick = () => {
    setSort(!sorted)
  }

const handleSorting = () => {
  
  if (sorted) {
   const sortedList = searchCocktails.sort((currentDrink, nextDrink) => {
      let currentLikes= currentDrink.likes;
      let nextLikes = nextDrink.likes;

      // Compare the two vote amounts
      if (currentLikes > nextLikes) return -1;
      if ( currentLikes < nextLikes) return 1;
      return 0;
    });
    return sortedList
  }
  else {
    return searchCocktails
  }
}
  
 return (
    <div className="App">
      <Search search={search} setSearch={setSearch} handleSortClick={handleSortClick} />
      
      {drinks.length > 0 ? <CocktailList drinks={handleSorting()} /> : <img alt="Loading" src="https://img.pikbest.com/58pic/35/39/61/62K58PICb88i68HEwVnm5_PIC2018.gif" />}
      

    </div>
  );
}

export default Favorites; 
