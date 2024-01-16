import Link from "next/link";
import Button from "../Button";
import { WorkText, ArvoText } from "../Text";

export default function HeroSection() {
  return (
    <div className={``}>
      <div className={`relative`}>
        <img className={`w-full h-[900px]`} src="/assets/bg.png" alt="" />
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, 0)",
          }}
          className={`absolute top-[50%] flex flex-col items-center`}
        >
          <img className={`w-[500px] mb-5`} src="/assets/black.svg" alt="" />
          <WorkText className={`font-medium text-white text-3xl mb-5`}>
            For Those Who Believe
          </WorkText>
          <Link href={`/Collections`}>
            <Button
              outline
              className={`text-xl bg-transparent`}
              cls={`w-fit  bg-transparent`}
            >
              SHOP
            </Button>
          </Link>
        </div>
      </div>
      <div className={`flex flex-col items-center justify-center pt-28 pb-16`}>
        <ArvoText block className={`font-bold text-3xl mb-3`}>
          More than just clothing, a lifestyle
        </ArvoText>
        <WorkText block className={`text-lg w-[500px] text-center leading-10`}>
          Creating a sense of hope in the hearts of many, tailoring smiles for
          millions to wear on their faces Created for those who believe, those
          who struggle to believe and those who have nothing to believe in
        </WorkText>
      </div>
    </div>
  );
}
