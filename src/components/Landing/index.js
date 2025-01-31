import React from "react";
import "./style.css";
import bgBlur from "../../images/bg_blur.webp";
import bgBlurDesktop from "../../images/bg_blur_desktop.webp";
import { isScreenAbove1200px } from "../../helper";
import Carousel from "../Carousel";
import Header from "../Header";
import InvitationDetails from "../InvitationDetails";
import PreviewVideo from "../PreviewVideo";
import ImageLink from "../ImageLink";

const Landing = () => {
  return (
    <div className="background-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${
            isScreenAbove1200px() ? bgBlurDesktop : bgBlur
          })`,
        }}
      />
      <div className="content-container">
        <Header />
        <Carousel />
        <InvitationDetails />
        <PreviewVideo title="The Prelude to Our Happily Ever After !!" />
        <ImageLink />
      </div>
    </div>
  );
};

export default Landing;
