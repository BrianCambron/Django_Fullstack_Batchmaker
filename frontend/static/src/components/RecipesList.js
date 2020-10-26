import React, { Component } from 'react';


function RecipeItem(props){
  return(
    <ul className="list-group col">
      <li className="list-group-item"><h3>{props.recipe.name}</h3><p>{props.recipe.instructions}</p>
      </li>
    </ul>
  )
}



function RecipesList(props){
  const recipes = props.recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe}/>);
  return(
  <div className="mt-3">
    {recipes}
  </div>
  )
}
export default RecipesList;
