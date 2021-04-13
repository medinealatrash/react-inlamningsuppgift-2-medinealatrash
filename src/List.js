import React from 'react';

export default function List(props) {

function click() {
    props.click(props.myListObj);
}

    return (
             <li className = 'List' onClick={click} >{props.myListObj.title} </li> 
    )
}
