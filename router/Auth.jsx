import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Authcontext = createContext(null);

export default function Auth({ children }) {
  let [user, setuser] = useState("");
  const navigate = useNavigate()

  function Login(name) {
    localStorage.setItem("loginUser", name);
    navigate("/Profile")
  }
  function LogOut() {
    localStorage.removeItem("loginUser");
    navigate("/Login")
  }

  useEffect(() => {
    let data = localStorage.getItem("loginUser");
    setuser(data);
  });
  return (
    <>
      <Authcontext.Provider value={{ Login, LogOut, user }}>
        {children}
      </Authcontext.Provider>
    </>
  );
}


export const userAuth=()=>{
  return useContext(Authcontext)

}
