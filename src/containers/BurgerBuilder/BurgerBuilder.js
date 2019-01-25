import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import IngredientTypes from "../../components/Burger/BurgerIngredient/BurgerIngredientTypes";
import BuildControls from "../../components/Burger/BuldsControls/BuildControls";

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);

        const ingredients = {};
        ingredients[IngredientTypes.Salad] = 0;
        ingredients[IngredientTypes.VeganBacon] = 0;
        ingredients[IngredientTypes.Cheese] = 0;
        ingredients[IngredientTypes.ChickpeaPatty] = 0;

        this.state = {
            ingredients: ingredients,
            totalPrice: 4
        }
    }

    addIngredientHandler = (type) => {
        const updatedIngredients = {...this.state.ingredients};
        let quantity = updatedIngredients[type];
        
        if (quantity !== null) {
            updatedIngredients[type] = quantity + 1;
        }

        const price = IngredientTypes.ingredients.find(i => i.type === type).price;
        const totalPrice = this.state.totalPrice + price

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: totalPrice
        });
    }

    removeIngredientHandler = (type) => {
        const updatedIngredients = {...this.state.ingredients};
        let quantity = updatedIngredients[type];
        
        if (quantity !== null && quantity > 0) {
            updatedIngredients[type] = quantity - 1;
        }

        const price = IngredientTypes.ingredients.find(i => i.type === type).price;
        const totalPrice = this.state.totalPrice - price

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: totalPrice
        });
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    onAdd={this.addIngredientHandler}
                    onRemove={this.removeIngredientHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;