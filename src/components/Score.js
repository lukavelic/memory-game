import React from "react";

const Score = (props) => {
    return (
        <div>Current score: {props.currentScore} - High Score: {props.highScore}</div>
    )
};

export default Score;