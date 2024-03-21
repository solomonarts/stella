import React from "react";
import Banner from "./Banner";

function Home() {
  return (
    <div className="relative">
      <div className="grid grid-flow-row grid-cols-12 nav__container">
        <div className="col-span-5">
          <img />
        </div>
        <div className="col-span-7 flex justify-between">
          <nav className="nav__bar">
            <ul className="flex gap-4 nav__list">
              <li className="nav__item">Home</li>
              <li className="nav__item">About Us</li>
              <li className="nav__item">Our Products</li>
              <li className="nav__item">Find us</li>
            </ul>
          </nav>
          <div>
            <input placeholder="Search" />
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
}

export default Home;
