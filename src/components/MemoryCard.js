import React from "react";

const MemoryCard = (props) => {

    // console.log(props)

    const clickHandler = (e) => {
        props.clickHandler(e);
    }

    return (
        <div id={props.id} onClick={clickHandler}>{props.img}</div>
    )
}

export default MemoryCard;