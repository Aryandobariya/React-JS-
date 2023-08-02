import React from "react";
import { Card } from "react-bootstrap";
import BasicExample from "./BasicExample";
import "./index.css";
import Newcart from "../conditional/Newcatd";
import Nickbans from "./Nickband";

export default function Nickdata() {
  let data = [
    {
      img: "https://www.boat-lifestyle.com/cdn/shop/products/01red_black-PhotoRoom.png-PhotoRoom_1280x.png?v=1681373674",
      productName: "Airdopes 141",
      price: "1250",
      description:
        "Wireless Earbuds with 8mm drivers, Upto 42 Hours Playback, ENx™ Technology, IPX4 Water Resistance",
    },
    {
      img: "https://www.boat-lifestyle.com/cdn/shop/products/blue_netflix_1_600x.png?v=1671090036",
      productName: "Airdopes 131",
      price: "1250",
      description:
        "Wireless Earbuds with 8mm drivers, Upto 42 Hours Playback, ENx™ Technology, IPX4 Water Resistance.",
    },
    {
      img: "https://www.boat-lifestyle.com/cdn/shop/products/93b827fc-0108-4e8b-9ea9-e66fb1e7a362_600x.png?v=1625157890",
      productName: "Airdopes 161",
      price: "1250",
      description:
        "Wireless Earbuds with 8mm drivers, Upto 42 Hours Playback, ENx™ Technology, IPX4 Water Resistance",
    },
    {
      img: "https://www.boat-lifestyle.com/cdn/shop/products/m3_600x.png?v=1639124743",
      productName: "Airdopes 161 ",
      price: "1250",
      description:
        "Wireless Earbuds with 8mm drivers, Upto 42 Hours Playback, ENx™ Technology, IPX4 Water Resistance",
    },
   
    
  ];
  return (
    <>
      <div className="container">
        <div className="row">
        
          {data.map((e, i) => (
            <div key={i} className="col-md-3 col-sm-6 col-12">
              <Nickbans Nickban={e} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
