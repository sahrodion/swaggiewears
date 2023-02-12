import React from "react";
import { ProductItem } from "./ProductItem";
import { WorkText, ArvoText } from "../assets/Text";
import PageContainer from "../assets/PageContainer";


export const Collections = () => {
  return (
        <PageContainer className={`flex flex-col items-center mx-auto`}>
            <WorkText block className={`mb-12 mt-20 text-center text-5xl font-bold`}>
        Collections
      </WorkText>
      <div className={`grid md:grid-cols-3 grid-cols-2 gap-5`}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      
      </div>
        </PageContainer>
      
  );
};
