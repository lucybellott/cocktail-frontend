import React from 'react'
import CocktailCard from './CocktailCard'

export default function CocktailList({ drinks }) {

    const drinksArray = drinks.map((drink) => {
        return <>
            <div className="col-4" style={{ marginBottom: '20px',  }}><CocktailCard
                key={drink.id}
                {...drink}
            />
            </div>
            <br />
        </>
    })
console.log(drinks)
    return (
        <div className="container" style={{ marginTop: '20px' }}>
            <div className="row">
                {drinksArray}
            </div>
        </div>
    )
}
