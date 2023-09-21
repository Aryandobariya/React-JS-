import React, { useState } from "react";
import { userAuth } from "./Auth";

export default function Login() {
  let [user, setuser] = useState();
 let auth = userAuth()
 console.log("🚀 ~ file: Login.jsx:7 ~ Login ~ auth:", auth)


 function data(){
    auth.Login(user)
     
    }
    // console.log("ASC", user)
  return <>
  <h1> login</h1>
  <input type="text"  onChange={(e)=>setuser(e?.target?.value)}/>

  <button onClick={()=>data()}>add data</button>
  
  
  
  
  </>;
}
