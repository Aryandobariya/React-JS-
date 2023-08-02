import React, { useState } from 'react'

export default function UseStatee() {
    let [no,setno]= useState(0);

    function count(){
        setno(no+1)
    }
  return (
    <div>
    
      <button onClick={()=>count()}>click meeee</button>
      {no}
    </div>
  )
}
