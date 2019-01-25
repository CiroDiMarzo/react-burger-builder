import React, { Component } from 'react'
import classes from './BurgerIngredient.module.css';
import IngredietType from "./BurgerIngredientTypes";
import PropTypes from 'prop-types'


export default class BurgerIngredient extends Component {
    render() {
        let ingredient = null;
    
        switch (this.props.type) {
            case (IngredietType.BreadBottom):
                ingredient = <div className={classes.BreadBottom}>&nbsp;</div>;
                break;
            case (IngredietType.BreadTop):
                ingredient = (
                    <div className={classes.BreadTop}>
                        &nbsp;
                        <div className={classes.Seeds1}>&nbsp;</div>
                        <div className={classes.Seeds2}>&nbsp;</div>
                    </div>
                )
                break;
            case (IngredietType.ChickpeaPatty):
                ingredient = <div className={classes.ChickpeaPatty}>&nbsp;</div>
                break;
            case (IngredietType.Cheese):
                ingredient = <div className={classes.Cheese}>&nbsp;</div>
                break;
            case (IngredietType.Salad):
                ingredient = <div className={classes.Salad}>&nbsp;</div>
                break;
            case (IngredietType.VeganBacon):
                ingredient = <div className={classes.VeganBacon}>&nbsp;</div>
                break;
            default:
                ingredient = null;
                break;
        }
    
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};
