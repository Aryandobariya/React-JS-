import React, { useEffect } from "react";
import { userAuth } from "./Auth";
import { useNavigate } from "react-router-dom";

export default function Protectrout({ component }) {
  let navigate = useNavigate();
  let { user } = userAuth();

  useEffect(() => {
    if (!user) {
      navigate("/Login");
    }
  });

  return <>{component}</>;
}
