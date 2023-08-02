import React, { useState } from "react";

export default function Usestate() {
  const [no, setNo] = useState(0);

  function No1() {
    setNo(no + 1);
  }

  return (
    <div>
      <div onClick={No1}>click me</div>
      <h1>{no}</h1>
    </div>
  );
}

