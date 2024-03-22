import React from "react";
import leavesbg from "../Assets/images/bg/leaves-01.png";
import downbg from "../Assets/images/bg/down-bg-01-01.png";
import { FaFacebook, FaInstagram, FaMailBulk } from "react-icons/fa";
import footerlogo from "../Assets/images/bg/bottle-splush-01.png";

function Footer() {
  return (
    <div className="footer__container">
      <footer>
        <img src={downbg} className="background" />
        <img src={leavesbg} className="foreground" />
        <div className="grid grid-flow-row grid-cols-12 footer__nav">
          <div className="col-span-12 lg:col-span-4 px-4 my-2">
            <div className="footer__logo flex flex-col gap-2">
              <img src={footerlogo} />
              <p>
                Our promise: To consistently provide safe and high quality dairy
                products that give our consumers the wings to start their lives
                adventures.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 px-4 my-2">
            <div className="grid grid-flow-row grid-cols-12">
              <div className="col-span-6 lg:col-span-4 flex flex-col gap-2">
                <h4 className="font-semibold">Company</h4>
                <ul>
                  <li>About</li>
                  <li>FAQs</li>
                  <li>Our Story</li>
                </ul>
              </div>
              <div className="col-span-6 lg:col-span-4 flex flex-col gap-2">
                <h4 className="font-semibold">Products</h4>
                <ul>
                  <li>Yoghurt</li>
                </ul>
              </div>
              <div className="col-span-6 lg:col-span-4 flex flex-col gap-2">
                <h4 className="font-semibold">Process</h4>
                <ul>
                  <li>Campaigns</li>
                  <li>How we do it</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 px-4 my-2 flex flex-col gap-2">
            <div className="socials flex justify-end gap-5">
              <a href="#facebook">
                <FaFacebook />
              </a>
              <a href="#instagram">
                <FaInstagram />
              </a>
              <a href="#mail">
                <FaMailBulk />
              </a>
            </div>
            <div>
              <p>
                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
