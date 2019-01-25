import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props) => {

  let disabled = true;

  if (props.quantity !== undefined) {
    disabled = !(props.quantity.quantity > 0);
  }

  return (
    <div className={classes.BuildControl}>
      <button className={classes.Less} disabled={disabled}
        onClick={() => { props.onRemove(props.type); }}>Less</button>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.More}
        onClick={() => { props.onAdd(props.type); }}>More</button>
    </div>
  )
}

export default buildControl