import React from 'react'
import { userAuth } from './Auth'

export default function Service() {


let Auth=userAuth()

  return (
    <div>
      <h1> hyyyy {Auth.user}</h1>
      <button onClick={()=>Auth.LogOut()}>  LogOut</button>






    </div>
  )
}
