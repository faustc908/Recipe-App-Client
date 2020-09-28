import React, { Fragment } from "react";
import "./RecipeForm.css";

const ShowRecipe = ({ recipe, removeRecipe }) => {
  //delete recipe function

  console.log(recipe);

  return (
    <Fragment>
      <div className="form">
        <div>
          {recipe.map((recipe) => (
            <p key={recipe.recipe_id}>
              <p>{recipe.description}</p>
              <div>
                <button
                  className="inputButton"
                  type="submit"
                  onClick={() => removeRecipe(recipe.recipe_id)}
                >
                  Delete
                </button>
              </div>
            </p>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ShowRecipe;
