import React from "react";
import greenbg from "../Assets/images/bg/big-back-g-01.png";
import whitebg from "../Assets/images/bg/white-bg-01.png";
import splashbg from "../Assets/images/bg/bottle-splush-01.png";
import Products from "./Products";
import Location from "./Location";
import Footer from "./Footer";
import Campaigns from "./Campaigns";

function Banner() {
  return (
    <div className="banner__wrapper">
      {/* parallax header */}
      <header>
        <img src={greenbg} className="background" />
        <img src={whitebg} className="bottompic" />
        <img src={splashbg} className="foreground" />
        <h1 className="header__txt">
          Take your <br /> <span>Yoghurt</span> to keep <br />
          your imune
        </h1>
      </header>

      {/* about us */}
      <section className="about__section">
        <div className="grid grid-flow-row grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-5 about__left">
            <div className="section__title">About Us</div>
            <div className="section__text">
              orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. <br />
              <br /> Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in <br />{" "}
              <br />
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril dele
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 about__right">
            <div className="Section__images"></div>
          </div>
        </div>
      </section>

      {/* products */}
      <Products />
      <Location />
      <Campaigns />
      <Footer />
    </div>
  );
}

export default Banner;
