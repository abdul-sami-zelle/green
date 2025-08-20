import React from "react";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { RxInstagramLogo } from "react-icons/rx";
import Link from "next/link";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-first">
        <div className="footer-second">
          <div className="footer-third">
            <ul>
              <li>
                <Link href="/privacyPolicy" className="linksss">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/TermsOfUse" className="linksss">Terms of Use</Link>
              </li>
            </ul>
            <ul>
              <li>
                <img src="/assets/Icons/american.svg" className="cardsss" alt="" />
              </li>
              <li>
                <img src="/assets/Icons/master.svg" className="cardsss" alt="" />
              </li>
              <li>
                <img src="/assets/Icons/discover.svg" className="cardsss" alt="" />
              </li>
              <li>
                <img src="/assets/Icons/visa.svg" className="cardsss" alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-fourth">
          <ul>
            <li>
              <span><BiLogoFacebookSquare className="iconss" /></span>
              Facebook
            </li>
            <li>
              <span><RxInstagramLogo className="iconss" /></span>
              Instagram
            </li>
            <li>
              <Link href="/TermsCondition" className="termss">Terms & Conditions</Link>
            </li>
          </ul>
          <ul className="footer-last">
            <li>© 2025, Delco Farmers Market</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
