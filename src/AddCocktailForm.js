import { useState } from "react";

function AddCocktailForm() {
  const [addIngredients, setAddIngredients] = useState(1);



  return (
    <div class="container">
      <form class="row g-3">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Name
          </label>
          <input type="text" class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Description
          </label>
          <input type="text" class="form-control" id="inputPassword4" />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">
            Image URL
          </label>
          <input type="text" class="form-control" id="inputAddress" />
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">
            Ingredients
          </label>
          <div>
      <label for="inputAddress2" class="form-label">
        Ingredients
      </label>
      <input type="text" class="form-control" id="inputAddress2" />
    </div>
          <button
            style={{ marginTop: "20px" }}
            type="button"
            class="btn btn-primary"
          >
            Add Ingredient
          </button>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCocktailForm;
