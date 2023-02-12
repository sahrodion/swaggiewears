import React from "react";
import { WorkText, ArvoText } from "../assets/Text";
import SearchBlock from "../assets/SearchBlock";
import PageContainer from "../assets/PageContainer";
import ItemCard from "../card/ItemCard";

export const Sweats = () => {
  return (
    <PageContainer className={`flex flex-col items-center mx-auto`}>
      <WorkText block className={`mb-12 mt-20 text-center text-5xl font-bold`}>
        Sweatshirts
      </WorkText>
      <SearchBlock/>
      <div className={`grid md:grid-cols-2 grid-cols-1 gap-40 gap-y-20`}>
        <ItemCard src={`/assets/shirt.jpg`}/>
        <ItemCard src={`/assets/shirt2.jpg`}/>
        <ItemCard src={`/assets/shirt3.jpg`}/>
        <ItemCard src={`/assets/shirt.jpg`}/>
        <ItemCard src={`/assets/shirt.jpg`}/>
        <ItemCard src={`/assets/shirt2.jpg`}/>
        <ItemCard src={`/assets/shirt.jpg`}/>
        <ItemCard src={`/assets/shirt3.jpg`}/>
      </div>
    </PageContainer>
  );
};
