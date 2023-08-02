import React, { useState } from "react";
import"./State.css"


export default function Project2() {
  let [index, setIndex] = useState(0);
  let arr = ["red", "green", "black"];

  function changeColor() {
    console.log(index);
    if (index < 2) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  return (
    <div>
      <h1 style={{ color: arr[index] }} className="bg">Aryan Dobariya</h1>
      <button onClick={() => changeColor()} >change colour</button>
    </div>
  );
}
