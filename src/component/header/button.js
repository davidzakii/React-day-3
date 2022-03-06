import React from "react";
export default function Button(props){
    const {name,handleClick}= props;
    return(
        <button className="btn btn-dark" onClick={handleClick}>{name}</button>
    )
}