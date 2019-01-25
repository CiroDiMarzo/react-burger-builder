import React from 'react';
import { CSSTransition } from "react-transition-group";
import classes from './Modal.module.css'

const modal = (props) => {
    return (
        <CSSTransition
            in={props.showModal}
            timeout={400}
            classNames={{
                enter: classes.ModalEnter,
                enterActive: classes.ModalEnterActive,
                exit: classes.ModalExit,
                exitActive: classes.ModalExitActive
            }}>
            <div className={[classes.Modal, classes.ModalEnter].join(' ')}>
                {props.children}
            </div>
        </CSSTransition>
    )
}

export default modal