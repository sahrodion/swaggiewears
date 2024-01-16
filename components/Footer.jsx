import React from "react";
import PageContainer from "./Container";
import { WorkText, ArvoText } from "./Text";

export default function Footer() {
  return (
    <div className={`bg-[#F8F8F8] md:p-20 p-5 w-full`}>
      <div className={` flex flex-col items-center w-full`}>
        <TopFooter />
        <div className={`bg-[#DCDCDC] w-[95vw] h-[1px] my-8`}></div>
        <BottomFooter />
      </div>
    </div>
  );
}

function TopFooter() {
  return (
    <div className={`grid md:grid-cols-2 grid-cols-1 gap-10`}>
      <div>
        <WorkText block className={`font-semibold text-2xl mb-3`}>
          SWAGGIE
        </WorkText>
        <WorkText block className={`w`}>
          For God so loved the world that he gave his only begotten Son, that
          whoever believes in him should not perish but have eternal life. John
          3:16
        </WorkText>
      </div>
      <div>
        <WorkText block className={`font-semibold text-2xl mb-3`}>
          Useful links
        </WorkText>
        <div className={`grid grid-cols-3 w-fit gap-4 cursor-default`}>
          <WorkText>Returns</WorkText> <WorkText>FAQs</WorkText>
          <WorkText>Contact Us</WorkText>
        </div>
      </div>
    </div>
  );
}

function BottomFooter() {
  return (
    <div className={`w-full`}>
      <div className={`flex`}>
        <Icon src="/assets/social-media/twitter.svg" className="mr-3" />
        <Icon src="/assets/social-media/instagram.svg" className="mr-3" />
      </div>
      <WorkText block className={`mt-3`}>
        © 2023, Swaggie Wears
      </WorkText>
    </div>
  );
}

function Icon({ src, className }) {
  return <img src={src} alt="" className={`h-[25px] ${className}`} />;
}
