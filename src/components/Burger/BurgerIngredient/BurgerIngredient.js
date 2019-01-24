import React, { Component } from 'react'
import classes from './BurgerIngredient.module.css';
import ingredietType from "./BurgerIngredientTypes";
import PropTypes from 'prop-types'


export default class BurgerIngredient extends Component {
    render() {
        let ingredient = null;
    
        switch (this.props.type) {
            case (ingredietType.breadBottom):
                ingredient = <div className={classes.BreadBottom}>&nbsp;</div>;
                break;
            case (ingredietType.breadTop):
                ingredient = (
                    <div className={classes.BreadTop}>
                        &nbsp;
                        <div className={classes.Seeds1}>&nbsp;</div>
                        <div className={classes.Seeds2}>&nbsp;</div>
                    </div>
                )
                break;
            case (ingredietType.chickpeaPatty):
                ingredient = <div className={classes.ChickpeaPatty}>&nbsp;</div>
                break;
            case (ingredietType.cheese):
                ingredient = <div className={classes.Cheese}>&nbsp;</div>
                break;
            case (ingredietType.salad):
                ingredient = <div className={classes.Salad}>&nbsp;</div>
                break;
            case (ingredietType.veganBacon):
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
