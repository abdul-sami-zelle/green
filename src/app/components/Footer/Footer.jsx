import React from "react";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { RxInstagramLogo } from "react-icons/rx";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-first">
        <div className="footer-second">
          <div className="footer-third">
            <ul className="">
              <li className="">Privacy Policy</li>
              <li className="">Terms of Use</li>
            </ul>
            <ul className="">
              <li className="">
                <img
                  src="/assets/Images/card1.png"
                  className="cardsss"
                  alt=""
                />
              </li>
              <li className="">
                <img
                  src="/assets/Images/card2.png"
                  className="cardsss"
                  alt=""
                />
              </li>
              <li className="">
                <img
                  src="/assets/Images/card3.png"
                  className="cardsss"
                  alt=""
                />
              </li>
              <li className="">
                <img
                  src="/assets/Images/card4.png"
                  className="cardsss"
                  alt=""
                />
              </li>
              <li className="">
                <img
                  src="/assets/Images/card5.png"
                  className="cardsss"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-fourth">
          <ul className="">
            <li className="">
              <span>
                <BiLogoFacebookSquare className="iconss" />
              </span>
              Facebook
            </li>
            <li className="">
              <span>
                <RxInstagramLogo className="iconss" />
              </span>
              Instagram
            </li>
            <li className="">Terms & Conditions</li>
          </ul>
          <ul className="">
            <li className="">© 2025, Green Vine Market</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
