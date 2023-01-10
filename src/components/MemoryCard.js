import React from "react";

const MemoryCard = (props) => {

    const clickHandler = (e) => {
        props.clickHandler(e);
    }

    return (
        <div id={props.id} onClick={clickHandler}>Card</div>
    )
}

export default MemoryCard;