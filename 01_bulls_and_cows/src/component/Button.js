import React from 'react';
import "../style/Button.scss";

export default function Button({children, onClick}){
    return (
        <button className="Button" onClick={onClick}>{children}</button>
    )
}