import React from "react";
import { WorkText, ArvoText } from "../Text";
import Link from "next/link";
import { urlFor } from "../lib/client";

export default function ItemCard({ product: { image, name, slug, price } }) {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div
          className={`border border-[#F8F8F]  p-1 overflow-hidden flex justify-center items-center`}
        >
          <img
            className="w-[100%] hover:scale-125 transition-all duration-500"
            src={urlFor(image && image[0]).url()}
          />
        </div>
        <ArvoText block className={`text- mt-3`}>
          {name}
        </ArvoText>
        <ArvoText className={`font-bold`}>₦ {price}</ArvoText>
      </Link>
    </div>
  );
}
