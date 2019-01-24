import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import ingredientTypes from "../../components/Burger/BurgerIngredient/BurgerIngredientTypes";

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);

        const ingredients = {};
        ingredients[ingredientTypes.salad] = 1;
        ingredients[ingredientTypes.veganBacon] = 1;
        ingredients[ingredientTypes.cheese] = 2;
        ingredients[ingredientTypes.chickpeaPatty] = 2;

        this.state = {
            ingredients: ingredients
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>Build controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;