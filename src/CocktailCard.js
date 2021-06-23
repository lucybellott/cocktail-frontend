import React, {useState} from 'react'

export default function CocktailCard({id, image, name, description, likes, ingredients, favorited}) {
    const [isLiked, setIsLiked] = useState(likes)
    const [isFav, setFav] = useState(favorited)

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

    const [edit, setEdit] = useState(false)
    const [newDescription, setNewDescription] = useState(description)
    
    function editDescription(){
        setEdit(edit => !edit)
    }

    function saveDescription(e){
        e.preventDefault()
        fetch (`http://localhost:3000/drinks/${id}`,{
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "description": newDescription
            })
        })
        .then(editDescription())
    }

    const handleStar = (e) => {
       
     fetch (`http://localhost:3000/drinks/${id}`,{
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "favorited": !isFav
            })
          })
          .then(res => res.json())
          .then(res => {
              setFav(res.favorited)
          })
        }
        
    
    return (
        <div className="card" style={{width: "15rem", overflow:"hidden", boxShadow: '3px 5px 1px 1px #00000034'}}>
        <img src={image} className="card-img-top" alt="..." style={{width:'15rem'}}/>
        <i style={{position: "absolute", top:"5px", left:"auto", right:"10px"}} className={isFav? "fas fa-star yellow" : "far fa-star"} onClick={handleStar}></i>
        <div className="card-body">
        <h5 className="card-title">{name}</h5>
        {edit ? <><form onSubmit={saveDescription}><input onChange={(e) => setNewDescription(e.target.value)} value={newDescription} type="text"></input><button type="submit" className="btn btn-dark">Save</button></form></>:<><p style={{fontStyle:"italic"}}className="card-text">{newDescription}</p> <button onClick={editDescription} type="button" className="btn btn-dark">Edit</button></>}
        
        <hr/>
       
        { isClicked ?
        <div>
        <h6 className="title">Ingredients</h6>
        <ul style={{textAlign:"left"}}>{ingredientsArray}</ul> </div> : null
        }
        <p className="card-text">Likes: {isLiked}</p>
        <button onClick={handleLike} type="button" className="btn btn-outline-danger">Like</button> 
        <button style={{marginLeft:"5px"}} type="button" className="btn btn-outline-primary" onClick={handleClick}>{isClicked ? "Hide Details" : "Details"}</button>

  </div>
</div>
    )
}
