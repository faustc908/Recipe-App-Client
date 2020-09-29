import React, { Fragment, useState } from "react";
import "./EditRecipe.css";

const EditRecipe = ({ recipe }) => {
  const [description, setDescription] = useState(recipe.description);

  // Edit recipe method

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      alert(recipe.description);
      fetch(
        `http://localhost:8000/recipe/${recipe.recipe_id}/${recipe.description}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div className="inputForm">
        <div>
          <h4 className="editDesc">
            If you want to edit the recipe add the entire new recipe below
          </h4>
        </div>
        <div>
          <input
            className="inputBox2"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <button
            className="inputButton"
            type="button"
            onClick={(e) => updateDescription(e)}
          >
            Edit recipe
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default EditRecipe;
