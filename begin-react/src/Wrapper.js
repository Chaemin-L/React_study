import React from 'react';

function Wrapper(props) {
    const style = {
        border: '2px solid black', 
        padding: 15
    }
    
    return (
        <div style={style}>{props.children}</div>
    )
}

export default Wrapper;