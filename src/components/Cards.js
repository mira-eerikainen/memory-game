import React, {useState} from "react";
import Card from "./Card";

const Cards = () => {

  const [items, setItems] = useState([
    {
      id: 1, text: 1, status: ""
    },
    {
      id: 1, text: 1, status: ""
    },
    {
      id: 2, text: 2, status: ""
    },
    {
      id: 2, text: 2, status: ""
    },
    {
      id: 3, text: 3, status: ""
    },
    {
      id: 3, text: 3, status: ""
    },
    {
      id: 4, text: 4, status: ""
    },
    {
      id: 4, text: 4, status: ""
    },
    {
      id: 5, text: 5, status: ""
    },
    {
      id: 5, text: 5, status: ""
    },
    {
      id: 6, text: 6, status: ""
    },
    {
      id: 6, text: 6, status: ""
    },
    {
      id: 7, text: 7, status: ""
    },
    {
      id: 7, text: 7, status: ""
    },
    {
      id: 8, text: 8, status: ""
    },
    {
      id: 8, text: 8, status: ""
    },
  ].sort(() => Math.random() - 0.5));

  const [prev, setPrev] = useState(-1);

  function check(current) {
    if (items[current].id === items[prev].id){
      items[current].status = "correct";
      items[prev].status = "correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].status = "wrong";
      items[prev].status = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].status = "";
        items[prev].status = "";
        setItems([...items]);
        setPrev(-1);
      }, 500);
    }
  }

  const handleClick = (id) => {
    if (prev === -1){
      items[id].status = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  };

  return <div className="container">
    { items.map((item, index) => (
      <Card key={index} item={item} id={index} handleClick={handleClick}/>
    ))}
  </div>;
};

export default Cards;
