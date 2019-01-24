import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import ingredientType from ".//BurgerIngredient/BurgerIngredientTypes";

const Burger = (props) => {

  const transformedIngredients = Object.keys(props.ingredients)
    .map(k => {
      return [...Array(props.ingredients[k])].map((_, index) => {
        return <BurgerIngredient key={k + index} type={k} />
      });
    });

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type={ingredientType.breadTop} />
      {transformedIngredients}
      <BurgerIngredient type={ingredientType.breadBottom} />
    </div>
  )
}

export default Burger