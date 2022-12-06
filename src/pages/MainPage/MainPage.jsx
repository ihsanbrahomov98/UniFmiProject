import React from "react";
import FirstNavbar from "../../components/Navbars/FirstNavbar/FirstNavbar";
import SecondNavbar from "../../components/Navbars/SecondNavbar/SecondNavbar";
import ThirdNavbar from "../../components/Navbars/ThirdNavbar/ThirdNavbar";
import ControlledCarousel from "../../components/Carousel/ControlledCarousel";
import IconList from "../../components/IconList/IconList";
import Cards from "../../components/Cards/Cards";
import RedLIne from "../../components/Lines/RedLIne";
import SmallCards from "../../components/Cards/SmallCards";
import PurpleLine from "../../components/Lines/PurpleLine";
import BottomCards from "../../components/Cards/BottomCards";
import BlackLine from "../../components/Lines/BlackLine";
import BrandsCards from "../../components/Cards/BrandsCards";
import SignUpLinePurple from "../../components/Lines/SignUpLinePurple";
import WhiteLine from "../../components/Lines/WhiteLine";
import PreferableCards from "../../components/Cards/PreferableCards";
import BlueLine from "../../components/Lines/BlueLine";
import Footer from "../../components/Footer/Footer";
const MainPage = () => {
  return (
    <div>
      <FirstNavbar />
      <SecondNavbar />
      <ThirdNavbar />
      <ControlledCarousel />
      <IconList />
      <Cards />
      <RedLIne />
      <SmallCards />
      <PurpleLine />
      <BottomCards />
      <BlackLine />
      <BrandsCards />
      <SignUpLinePurple />
      <WhiteLine />
      <PreferableCards />
      <BlueLine />
      <Footer />
    </div>
  );
};

export default MainPage;
