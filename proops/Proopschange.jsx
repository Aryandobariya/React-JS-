import React, { useState } from "react";
import Header from "../Header";
import Body from "../body";
import "./props.css"

export default function Proopschange() {
  let [chnge, setchange] = useState();
  let [isTrue, setIsTrue] = useState(true);

  function fun1() {
    setchange(<Header />);
  }
  function fun2() {
    setchange(<Body />);
  }
  function changeEle() {
    setIsTrue(!isTrue); 
  }
  return (
    <div className="div">
      {/* <h1>{chnge}</h1> */}
      {isTrue ? <Body /> : <Header />}
      <button onClick={() => changeEle()} className="btn btn-primary "  > chnage </button>

      {/* <button onClick={() => fun1(true)}>fun1</button>
      <button onClick={() => fun2(false)}>fun2</button> */}
    </div>
  );
}
