
import Header from "./Components/Header/Header";
import BannerSection from "./Components/Homepage/BannerSection/BannerSection";
import NewInclusion from "./Components/Homepage/NewInclusion/NewInclusion";
import OtherServices from "./Components/Homepage/OtherServices/OtherServices";
import OurShowrooms from "./Components/Homepage/OurShowrooms/OurShowrooms";
import SellYourCar from "./Components/Homepage/SellYourCar/SellYourCar";
import Footer from "./Components/Footer/Footer";
import ExploreSection from "./Components/Homepage/ExploreSection/ExploreSection";
import FeaturedSection from "./Components/Homepage/FeaturedSection/FeaturedSection";

export default function Home() {
  return (
    <main>
      <Header />
      <BannerSection />
      <NewInclusion />
      <OtherServices />
      <OurShowrooms />
      <SellYourCar />
      <ExploreSection />
      <FeaturedSection />
      <Footer />
    </main>
  );
}
