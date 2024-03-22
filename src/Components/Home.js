import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import navlogo from "../Assets/images/bg/bottle-splush-01.png";
import {
  FaHome,
  FaNewspaper,
  FaPhone,
  FaProductHunt,
  FaShoppingBasket,
} from "react-icons/fa";

function Home() {
  return (
    <div className="relative">
      <div
        className={`grid-flow-row grid-cols-12 nav__container hidden lg:grid drop-shadow-md bg-white`}
      >
        <div className="col-span-2 xl:col-span-4 nav__logo">
          <img src={navlogo} />
        </div>
        <div className="col-span-10 xl:col-span-8 flex justify-between items-center">
          <nav className="nav__bar">
            <ul className="flex gap-6 nav__list">
              <li className="nav__item">Home</li>
              <li className="nav__item">About Us</li>
              <li className="nav__item">Our Products</li>
              <li className="nav__item">Find us</li>
            </ul>
          </nav>
          <div className="seach__input">
            <input placeholder="Search" />
          </div>
        </div>
      </div>
      <div class="phone flex lg:hidden fixed bottom-0 z-50">
        <input className="smallnavin" type="radio" name="s" id="s1" checked="checked" />
        <input className="smallnavin" type="radio" name="s" id="s2" />
        <input className="smallnavin" type="radio" name="s" id="s3" />
        <input className="smallnavin" type="radio" name="s" id="s4" />
        <label for="s1">
          <FaHome className="icon" />
        </label>
        <label for="s2">
          <FaNewspaper className="icon" />
        </label>
        <label for="s3">
          <FaShoppingBasket className="icon" />
        </label>
        <label for="s4">
          <FaPhone className="icon" />
        </label>
        <div class="circle"></div>
        <div class="phone_content">
          <div class="phone_bottom">
            <span class="indicator"></span>
          </div>
        </div>
      </div>

      <Banner />
    </div>
  );
}

export default Home;
