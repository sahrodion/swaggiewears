import React from "react";
import { WorkText, ArvoText } from "../assets/Text";
import CardContainer from "./CardContainer";

export default function ItemCard(props) {
const{src, item_name} = props
  return (
    <div>
      <div
        className={`border-2 border-[#F8F8F]  w-[100%] h-[100%] p-10 overflow-hidden`}
      >
        <img
          className="w-full h-full hover:scale-125 transition-all duration-500"
          src={src}
          alt="shirt"
        />
      </div>
      <ArvoText block className={`font-medium text-xl mt-3`}>
        {item_name}
      </ArvoText>
      <ArvoText>N 6000</ArvoText>
    </div>
  );
}
