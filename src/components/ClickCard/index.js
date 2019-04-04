import React from "react";

function ClickCard(props) {
  return (
      <img 
        alt={props.card.name} 
        aria-label="click item" 
        className="click-item" 
        data-id={props.card.id}
        src={props.card.image} 
        onClick={() => props.addClick(props.card.id)}
      />
  );
}

export default ClickCard;
