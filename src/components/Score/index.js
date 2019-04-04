import React from "react";

function Score(props){
    return(
            <li> Score: {props.score} | Top Score: {props.highScore} </li>

    );
}

export default Score;
