import React from 'react';
import classes from './Button.module.scss';

const Button = (props) => {
  return <button className={classes.button} color={props.color}>{props.children}</button>
}

export default Button;