import { useState } from "react";
import { useHistory } from "react-router-dom";
function AddCocktailForm() {
  let history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    ingreDients: [{ ingredient0: "" }],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleIngredients = (e, i) => {
    const ingredients = [...formData.ingreDients];
    
    ingredients[i][e.target.name] = e.target.value;
    setFormData({ ...formData, ingreDients: ingredients });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
 
    const ingredients=  formData.ingreDients.map((ingredient , index) => {

      const newValue = ingredient[`ingredient${index}`]
      return newValue
    })
    console.log(ingredients)

    const {name, image, description} = formData
  
    fetch (`http://localhost:3000/drinks/`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name,image, description, ingredients, likes:0,  favorited: false })
      })
      .then(res => res.json())
      .then(res => {
        history.replace("/");
      })
  }

  const { name, image, description } = formData;
  return (
    <div className="container">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">
            Description
          </label>
          <input
            type="text"
            name="description"
            value={description}
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label
            for="inputAddress"
           
            className="form-label"
          >
            Image URL
          </label>
          <input type="text"  name="image"
            value={image} className="form-control" id="inputAddress" onChange={handleChange}/>
        </div>
        <div className="col-12">
          <label for="inputAddress2" className="form-label">
            Ingredients
          </label>

          {formData.ingreDients.map((ing, index) => (
            <div key={[`ingredient${index}`]}>
              <input
                name={[`ingredient${index}`]}
                type="text"
                className="form-control"
                onChange={(e) => handleIngredients(e, index)}
              />
            </div>
          ))}

          <button
            style={{ marginTop: "20px" }}
            type="button"
            className="btn btn-primary"
            onClick={() =>
              setFormData({
                ...formData,
                ingreDients: [
                  ...formData.ingreDients,
                  { [`ingredient${formData.ingreDients.length}`]: "" },
                ],
              })
            }
          >
            Add Ingredient
          </button>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCocktailForm;
