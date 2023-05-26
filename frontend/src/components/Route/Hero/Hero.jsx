import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://i.ibb.co/ZX4GLcf/dd.png)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%] text-center`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-black font-[600] `}
        >
          Empower Your Creativity with <br /> Our Multimedia Marketplace
        </h1>
        <p className="pt-12 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
        Welcome to our online marketplace, where you can buy and sell a wide range of multimedia <br /> products, all in one place. Our platform is designed to make it easy and convenient <br /> for you  to find the products you need to bring your creative vision to life.
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-6`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
