import React from 'react';
import { CSSTransition } from "react-transition-group";
import classes from './Modal.module.css'

const modal = (props) => {

    const modalClasses = [classes.Modal];
    if (props.showModal) {
        modalClasses.push(classes.ModalExit);
    } else {
        modalClasses.push(classes.ModalDone);
    }

    return (
        <CSSTransition
            in={props.showModal}
            timeout={400}
            classNames={{
                enterActive: classes.ModalEnterActive,
                exitActive: classes.ModalExitActive,
                exitDone: classes.ModalDone
            }}>
            <div className={modalClasses.join(' ')}>
                {props.children}
            </div>
        </CSSTransition>
    )
}

export default modal