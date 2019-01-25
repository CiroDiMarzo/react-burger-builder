import React, {Component} from 'react'
import Aux from "../../../hoc/Auxiliary";
import IngredientTypes from "../BurgerIngredient/BurgerIngredientTypes";
import BurgerContext from "../../../burger-context";

import classes from './OrderSummary.module.css'

class OrderSummary extends Component {
    static contextType = BurgerContext;

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                const name = IngredientTypes.getNameByType(igKey);
                if (this.props.ingredients[igKey] > 0) {
                    return <li key={igKey}><span>{name}</span>: {this.props.ingredients[igKey]}</li>;   
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
                <button className={classes.OrderButton} onClick={this.context.cancelOrder}>Cancel</button>
                <button className={classes.OrderButton} onClick={this.context.cancelOrder}>Checkout!</button>
            </Aux>
        )
    }
}

export default OrderSummary;