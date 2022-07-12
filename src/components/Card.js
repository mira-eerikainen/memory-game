import React from "react";

const Card = ({item, id, handleClick}) => {
  const itemClass = item.status ? " active " + item.status : "";

  return (
    <div className={"card" + itemClass} onClick={() => handleClick(id)}>
      <div className="number">
        {item.text}
      </div>
    </div>
  );
};

export default Card;
