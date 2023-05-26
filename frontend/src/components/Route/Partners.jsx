import React from "react";
import styles from "../../styles/styles";

const Partners = () => {
  return (
    <div className="hidden sm:block">
    <div className={`${styles.section}`}>
      <div className={`${styles.heading}`}>
        <h1>Our Partners</h1>
    </div>
    <div
      className=' bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl'
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src="https://i.ibb.co/Rb9hWWq/bkash.png"
            alt=""
            style={{width:"150px", height:"80px", objectFit:"contain"}}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://i.ibb.co/PMPr1rT/Redx.png"
            style={{width:"150px", height:"80px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://i.ibb.co/XpS7L40/Untitled.png"
            style={{width:"150px", height:"80px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://i.ibb.co/XjJ7ZXW/pathao-logo-1-AF54-E5-B5-E-seeklogo-com.png"
            style={{width:"150px", height:"80px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://i.ibb.co/ssBZpbJ/images-removebg-preview.png"
            style={{width:"150px", height:"80px", objectFit:"contain"}}
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Partners;
