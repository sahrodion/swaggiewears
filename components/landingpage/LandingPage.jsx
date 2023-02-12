import HeroSection from "./HeroSection";
import Navbar from "../assets/Navbar";
import PageContainer from "../assets/PageContainer";
import { WorkText } from "../assets/Text";
import ItemCard from "../card/ItemCard";

export default function LandingPage() {
  return (
    <div className={``}>
      <HeroSection />
    <PageContainer className={`mx-auto`}>
      <section className={`flex flex-col items-center w-full`}>
        <WorkText className={`text-3xl my-12 font-semibold`}>SELECTED FOR YOU</WorkText>
        <div className={`grid md:grid-cols-4 grid-cols-2 gap-5`}>
          <ItemCard item_name={`Shorts`} src={`/assets/short1.jpg`}/>
          <ItemCard item_name={`Shirt`} src={`/assets/shirt2.jpg`}/>
          <ItemCard item_name={`Cap`} src={`/assets/cap1.jpg`}/>
          <ItemCard item_name={`Shirt`} src={`/assets/shirt3.jpg`}/>
        </div>
      </section>
    </PageContainer>
    </div>
  );
}
