import React, { useState } from "react";

export default function Props(proop) {
  let [change, setChange] = useState(proop?.obj?.name);

  let funResult = proop?.obj?.name.toUpperCase();

  function HClick() {
    setChange(funResult);
  }

  return (
    <div>
      {/* <h1>{proop.name}</h1>
      <h1>{proop.age}</h1> */}
      {/* <h1>{proop?.obj?.name}</h1> */}
      <h1>{change}</h1>
      <button onClick={HClick}>click</button>
    </div>
  );
}
