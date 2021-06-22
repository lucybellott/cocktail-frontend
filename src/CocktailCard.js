import React, {useState} from 'react'

export default function CocktailCard({id, image, name, description, likes, ingredients}) {
    const [isLiked, setIsLiked] = useState(likes)

    function  handleLike(e){
        const newlike = isLiked +1 
        fetch (`http://localhost:3000/drinks/${id}`,{
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "likes": newlike
            })
          })
          .then(res => res.json())
          .then(res => {
              setIsLiked(res.likes)
          })
        }
    
    const ingredientsArray = ingredients.map((ing) =>{
        return <li>{ing}</li>
    })

    const[isClicked, setClick] = useState(false)

    const handleClick = (e) => {
        setClick(!isClicked)
    }
    
    return (
        <div class="card" style={{width: "15rem", overflow:"hidden", boxShadow: '3px 5px 1px 1px #00000034'}}>
        <img src={image} class="card-img-top" alt="..." style={{width:'15rem'}}/>
        <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p style={{fontStyle:"italic"}}class="card-text">{description}</p>
        <hr/>
       
        { isClicked ?
        <div>
        <h6 className="title">Ingredients</h6>
        <ul style={{textAlign:"left"}}>{ingredientsArray}</ul> </div> : null
        }
        <p class="card-text">Likes: {isLiked}</p>
        <button onClick={handleLike} type="button" class="btn btn-outline-danger">Like</button> 
        <button style={{marginLeft:"5px"}} type="button" class="btn btn-outline-primary" onClick={handleClick}>{isClicked ? "Hide Details" : "Details"}</button>

  </div>
</div>
    )
}
