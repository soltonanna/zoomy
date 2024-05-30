import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

export const Button = forwardRef((props, ref) => {
    const classes = `
    button 
    rounded-full bg-light-orange text-white px-5 py-2 rounded border-light-orange flex flex-row transition ease-in-out border hover:bg-dark-orange hover:border-dark-orange
    ${props.className ? props.className : '' }`;
    
    return (
        <button 
            onClick={props.onClick} 
            className={classes}
            value={props.value}
            ref={ref}
        >
            {props.children}
        </button>
    )
});

export const MButton = motion(Button);