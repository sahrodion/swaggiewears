import React from 'react'
import { WorkText } from '../assets/Text';

export const ProductItem = ({src}) => {
  return (
    <div
      className={`relative  rounded-xl w-[100%] h-[100%] p-2 overflow-hidden`}
    >
      <div
        className={`bg-gray-700/50 hover:bg-gray-700/30 rounded-xl w-full h-full absolute top-0 left-0 flex justify-center items-center`}
      >
        <WorkText block className={`text-center text-white text-5xl font-bold`}>
          Item Name
        </WorkText>
      </div>
      <img className="w-full h-full" src="/assets/cap1.jpg" alt="shirt" />
    </div>
  );
}
