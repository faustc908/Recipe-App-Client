import React from "react";
import style from "./recipe.module.css";

// Recipe render from call to Edamam API

const Recipe = ({ title, image, ingredients, url }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.recipeTitle}>{title}</h1>
      <ol>
        {ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient.text}</li>
        ))}
      </ol>
      <a className={style.recipeLink} href={url}>
        Find cooking instructions!
      </a>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;
