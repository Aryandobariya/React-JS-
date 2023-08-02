import React, { useState } from "react";
import { Card } from "react-bootstrap";
import BasicExample from "./BasicExample";
import "./index.css";
import Newcart from "../conditional/Newcatd";
import Nickbans from "./Nickband";

export default function Mapcom(props) {
  let data = [
    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_141_d277995b-31ae-420d-b5b4-1161515335ed.jpg?v=1687428689",
      productName: "Airdopes 141",
      price: "1250",
      description: "Wireless Earbuds with 8mm drivers, ",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_new_8c8dd689-e23d-4448-9920-2ef3f5a5e43b.jpg?v=1685686859",
      productName: "Airdopes 131",
      price: "1250",
      description: "Wireless Earbuds with 8mm drivers, ",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161.jpg?v=1686297917",
      productName: "Airdopes 161",
      price: "1250",
      description: "Wireless Earbuds with 8mm drivers, ",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161_Pro_49947db5-298c-40c7-94bc-072faaa427a7.jpg?v=1689920938",
      productName: "Airdopes 161 ",
      price: "1250",
      description: "Wireless Earbuds with 8mm drivers, ",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Wave_Call__1.jpg?v=1689751649",
      productName: "Wave Call",
      price: "1450.00",
      description: "with 8mm drivers, Upto 42 Hours ",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/SC2_Black.jpg?v=1689244018",
      productName: "Storm Wave  2 ",
      price: "1550.00",
      description: "  with 8mm drivers, Upto 42 Hours ",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Wave_Call_2_268181d9-df99-4732-ab67-a9bba743e01b.jpg?v=1689586538",
      productName: "Lunar Wave  ",
      price: "1650.00",
      description: " with 8mm drivers, Upto 42 Hours ",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Lunar_Connect_Ace.jpg?v=1687342035",
      productName: "Wave  call 2",
      price: "1850.00",
      description: " with 8mm drivers, Upto 42 ",
    },
    {
      img: "https://www.boat-lifestyle.com/cdn/shop/products/01red_black-PhotoRoom.png-PhotoRoom_1280x.png?v=1681373674",
      productName: "Rockerz 185 Pro",
      price: "1250",
      description: "Wireless Earbuds with 8mm drivers, Upto 42 ",
    },
    {
      img: "https://www.boat-lifestyle.com/cdn/shop/products/blue_netflix_1_600x.png?v=1671090036",
      productName: "Rockerz 333 Pro",
      price: "1250",
      description: "Wireless Earbuds with 8mm drivers, Upto 42 .",
    },
    {
      img: "https://www.boat-lifestyle.com/cdn/shop/products/93b827fc-0108-4e8b-9ea9-e66fb1e7a362_600x.png?v=1625157890",
      productName: "Rockerz 255 Pro",
      price: "1250",
      description: "Wireless Earbuds with 8mm drivers, Upto 42 ",
    },
    {
      img: "https://www.boat-lifestyle.com/cdn/shop/products/m3_600x.png?v=1639124743",
      productName: "Rockerz 330 Pro ",
      price: "1250",
      description: "Wireless Earbuds with 8mm drivers, Upto 42 ",
    },
  ];

  const filteredData = data.filter(
    (product) =>
      product.productName
        .toLowerCase()
        .includes(props.filterTaxt.toLowerCase()) ||
      product.price.toLowerCase().includes(props.filterTaxt.toLowerCase())
  );

  return (
    <>
      <div className="container ">
        <div className="row">
          {filteredData.map((e, i) => {
            return <BasicExample Carddata={e} key={i} />;
          })}
        </div>
      </div>
    </>
  );
}
