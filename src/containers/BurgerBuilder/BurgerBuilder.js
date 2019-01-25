import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import IngredientTypes from "../../components/Burger/BurgerIngredient/BurgerIngredientTypes";
import BuildControls from "../../components/Burger/BuldsControls/BuildControls";
import Modal from "../../components/ui/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import BurgerContext from "../../burger-context";

class BurgerBuilder extends Component {

    static contextType = BurgerContext;

    constructor(props) {
        super(props);

        const ingredients = {};
        ingredients[IngredientTypes.Salad] = 0;
        ingredients[IngredientTypes.VeganBacon] = 0;
        ingredients[IngredientTypes.Cheese] = 0;
        ingredients[IngredientTypes.ChickpeaPatty] = 0;

        this.state = {
            ingredients: ingredients,
            totalPrice: 4,
            quantities: [],
            purchasable: false,
            purchasing: false
        }
    }

    addIngredientHandler = (type) => {
        const updatedIngredients = { ...this.state.ingredients };
        let quantity = updatedIngredients[type];

        if (quantity !== null) {
            updatedIngredients[type] = quantity + 1;

            const price = IngredientTypes.ingredients.find(i => i.type === type).price;
            const totalPrice = this.state.totalPrice + price

            this.setState({
                ingredients: updatedIngredients,
                totalPrice: totalPrice
            });
        }
        this.updateIngredientState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const updatedIngredients = { ...this.state.ingredients };
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
        this.updateIngredientState(updatedIngredients);
    }

    updateIngredientState = (updatedIngredients) => {
        const quantities = Object.keys(this.state.ingredients)
            .map(ingType => {
                return { type: ingType, quantity: updatedIngredients[ingType] };
            });

        let totalQuantity = 0;
        for (const quantity of quantities) {
            totalQuantity += quantity.quantity;
        }

        this.setState({
            purchasable: totalQuantity > 0,
            quantities: quantities
        })
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        });
        this.context.startOrder();
    }

    purchaseCancelHandler = () => {
        this.hideOrderWindow();
    }

    hideOrderWindow = () => {
        this.setState({
            purchasing: false
        });
        this.context.startOrder();
    }

    componentDidMount = () => {
        this.context.cancelOrder = this.purchaseCancelHandler;
    }
    
    render() {
        return (
            <Aux>
                <Modal showModal={this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    purchasable={this.state.purchasable}
                    totalPrice={this.state.totalPrice}
                    quantities={this.state.quantities}
                    onAdd={this.addIngredientHandler}
                    onRemove={this.removeIngredientHandler}
                    ordered={this.purchaseHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;