import React, { useState } from 'react'

export default function UseStat() {

    let [count1,setcount] =useState(10)
    
    function coun() {
        setcount(count1+2);
        
    }
  return (
    <div>
     <button onClick={()=>coun()}>clicke</button>
     <h1>{count1}</h1>
    </div>
  )
}
