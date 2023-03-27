import React from "react";
import img from './img4.jpg'
import google from './google.png'
import facebook from './facebook.png'
import instagram from './instagram.png'
import phone from './phone.png'

const header = () => {
  return ( 
    <div className="header">
      <div className="logo">
      <img src={img} alt="loading"/>
        <strong>Flexagn</strong>
      </div>
      <div className="boxes">
        <div className="box" style = {{background : '#22cb22'}}>
          <strong>
            Admission Enquiry <br /> Chiguruwada Branch
          </strong>
        </div>
        <div className="box" style = {{background : '#e19201'}}>
          <strong>
            Admission Enquiry <br /> Chiguruwada Branch
          </strong>
        </div>
      </div>
      <div className="num">
        <span><img src={phone} alt="" /></span>
        <strong> 9876543210</strong>
      </div>
      <div className="social">
        <span><img src={facebook} alt="" /></span>
        <span><img src={instagram} alt="" /></span>
        <span><img src={google} alt="" /></span>
      </div>
    </div>
  );
}; 

export default header;
