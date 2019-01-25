import React from 'react'
import Aux from "../../../hoc/Auxiliary";
import IngredientTypes from "../BurgerIngredient/BurgerIngredientTypes";

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            const name = IngredientTypes.getNameByType(igKey);
            if (props.ingredients[igKey] > 0) {
                return <li key={igKey}><span>{name}</span>: {props.ingredients[igKey]}</li>;   
            } else {
                return null;
            }
        });

    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout</p>
        </Aux>
    )
}

export default orderSummary;