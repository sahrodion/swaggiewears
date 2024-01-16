import HeroSection from "./HeroSection";
import Container from "../Container";
import { WorkText } from "../Text";
import ItemCard from "../card/ItemCard";
import { urlFor } from "../lib/client";

export default function LandingPage({ data }) {
  return (
    <div className={``}>
      <HeroSection />
      <Container className={`flex flex-col items-center w-full p-5 md:p-20`}>
        <WorkText className={`text-3xl mb-12 mt-8 font-semibold`}>
          SELECTED FOR YOU
        </WorkText>
        <div className={`grid md:grid-cols-4 grid-cols-2 gap-5`}>
          {data?.map((product) => (
            <ItemCard key={product._id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
}
