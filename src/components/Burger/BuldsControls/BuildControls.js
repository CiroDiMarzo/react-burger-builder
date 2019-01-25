import React from 'react'
import BuildControl from "./BuildControl/BuildControl";
import IngredientTypes from "../BurgerIngredient/BurgerIngredientTypes";
import classes from './BuildControls.module.css'

const controls = IngredientTypes.ingredients.filter(i =>
  i.type !== IngredientTypes.BreadBottom && i.type != IngredientTypes.BreadTop);

const buildControls = (props) => {
  const buildControls = controls.map(
    c => <BuildControl
      key={c.type}
      type={c.type}
      label={c.name}
      onAdd={props.onAdd}
      onRemove={props.onRemove} />
  );

  return (
    <div className={classes.BuildControls}>
      {buildControls}
    </div>
  )
}

export default buildControls