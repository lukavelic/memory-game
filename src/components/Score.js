import React from "react";
import './Score.css'

const Score = (props) => {
    return (
        <div className="score-container">Current score: {props.currentScore} - High Score: {props.highScore}</div>
    )
};

export default Score;