import React from "react";
import './MemoryCard.css'

const MemoryCard = (props) => {
    const clickHandler = (e) => {
        props.clickHandler(e);
    }

    return (
        <img className="card" src={props.img} id={props.id} onClick={clickHandler}/>
    )
}

export default MemoryCard;