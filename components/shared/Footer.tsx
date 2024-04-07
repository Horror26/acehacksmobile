import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./Footer.css";
import { FaLinkedin, FaTwitter, FaGoogle, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer text-black" >
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>About</h4>
              <ul>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">our services</a>
                </li>
                <li>
                  <a href="#">privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Get Help</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Payments</a>
                </li>
                <li>
                  <a href="https://chat-app-horror26.vercel.app/login">Community</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact us</h4>
              <ul>
                <li>
                  <a href="mailto:horrorj18@gmail.com?body=fell free to type">
                    Gmail
                  </a>
                </li>
                <li>
                  <a href="tel:9999999999">Helpline No</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/darshan-jaju-73b237223/"
                  target="blank"
                >
                  <FaLinkedin className=" mx-auto mt-3 scale-125" />
                </a>
                <a href="https://twitter.com/Darshanjaju5" target="blank">
                  <FaTwitter className=" mx-auto mt-3 scale-125" />
                </a>

                <a href="https://www.instagram.com/dj__260/" target="blank">
                  <FaInstagram className=" mx-auto mt-3 scale-125" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col sm:flex-row justify-center items-center gap-4 ">
        <p className=" text-xl my-2  ">© 2024</p>
        <div className=" flex flex-row items-center justify-center ">
        <img  src="/assets/images/Logo.png" alt="" width={70} height={32} className="rounded-xl " />
        <p className="">MINDFULME</p>
        </div>
      </div>
      
      </footer>
  );
};

export default Footer;
