import React, { Component } from 'react';
// With CSS Modules
import "./buttons.css";


const SimpleButton = ({callback, size, btntype}) => {   
    return (
        <button className={`button button__${btntype} button-size--${size}`}  onClick={() => {callback()}}> 
            {btntype} 
        </button>
     ); 
}
export default SimpleButton;