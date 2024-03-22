import React from "react";
import { FaPlay } from "react-icons/fa";
import { icons } from "../utils/Contants";

function Campaigns() {
  return (
    <div className="campaign__container">
      <img className="fun__pic" src={icons["icons8-campaign-100.png"]} alt="cpn-ico"/>
      <div className="grid grid-flow-row grid-cols-12 campaign__content">
        <div className="col-span-12 lg:col-span-6 campn__left">
          <div className="campaign__text text-center lg:text-left">
            <h1>Stellar Campaign</h1>
            <h4>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laor et dolore magna aliquam
              erat volutpat. Ut wisi enim
            </h4>
            <div className="campn__btn m-auto lg:m-0">
              <h6>See more Campaigns</h6>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 campn__right">
          <div className="campaign__vid">
            <FaPlay className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Campaigns;
