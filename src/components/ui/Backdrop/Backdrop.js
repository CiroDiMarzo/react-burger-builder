import React, { Component } from 'react';
import classes from './Backdrop.module.css';
import BurgerContext from "../../../burger-context";

class Backdrop extends Component {
    static contextType = BurgerContext;

    render() {
        if (this.props.show) {
            return <div className={classes.Backdrop} onClick={this.context.cancelOrder}></div>;
        } else {
            return null;
        }
    }
}

export default Backdrop;