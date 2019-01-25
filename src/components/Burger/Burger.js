import React from 'react'
import { CSSTransition, TransitionGroup } from "react-transition-group";
import classes from './Burger.module.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import IngredientType from ".//BurgerIngredient/BurgerIngredientTypes";

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(k => {
      return [...Array(props.ingredients[k])].map((_, index) => {
        return (
          <CSSTransition
            key={k + index}
            classNames={{
              enter: classes.ingredientEnter,
              enterActive: classes.ingredientEnterActive,
              exit: classes.ingredientExit,
              exitActive: classes.ingredientExitActive
            }}
            timeout={600}>
            <BurgerIngredient type={k} />
          </CSSTransition>
        )
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  let ingredientList = <p>Please start adding ingredients</p>;
  if (transformedIngredients.length > 0) {
    ingredientList = (
      <TransitionGroup>
        {transformedIngredients}
      </TransitionGroup>
    );
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type={IngredientType.BreadTop} />
      {ingredientList}
      <BurgerIngredient type={IngredientType.BreadBottom} />
    </div>
  )
}

export default Burger