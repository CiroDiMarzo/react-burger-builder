import React from 'react'
import BuildControl from "./BuildControl/BuildControl";
import IngredientTypes from "../BurgerIngredient/BurgerIngredientTypes";
import classes from './BuildControls.module.css'

const controls = IngredientTypes.ingredients.filter(i =>
  i.type !== IngredientTypes.BreadBottom && i.type !== IngredientTypes.BreadTop);

const buildControls = (props) => {
  const buildControls = controls.map(
    c => {
      const quantity = props.quantities.find(t => t.type === c.type);
      return <BuildControl
        key={c.type}
        type={c.type}
        label={c.name}
        quantity={quantity}
        onAdd={props.onAdd}
        onRemove={props.onRemove} />;
    }
  );

  return (
    <div className={classes.BuildControls}>
      <p>Current Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
      {buildControls}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}>Order!</button>
    </div>
  )
}

export default buildControls