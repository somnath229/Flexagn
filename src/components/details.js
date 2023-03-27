import React from "react";
import study from "./study.png";

const details = () => {
  return (
    <div className="details">
      <div className="heading">
        <h1>
          <span>WHY CHOOSE</span> FLEXAGN SCHOOL
        </h1>
      </div>
      <div className="detailB">
        <div className="colmL">
          <div className="boxDL boxK">
            <h1 style = {{color : '#E97451'}}>Experienced Teachers</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est,
              nisi. Voluptatem voluptas vitae libero sit in voluptatum
              temporibus eaque cumque.
            </p>
          </div>
          <div className="boxDL boxK">
            <h1 style = {{color : '#076585'}}>A/C Residental Campus</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              facilis odit quidem rerum deleniti tempora reiciendis voluptates
              libero illum corrupti.
            </p>
          </div>
          <div className="boxDL boxK">
            <h1 style = {{color : '#FFC000'}}>Delicious food</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quas
              et animi facilis molestias ipsam assumenda deleniti quo recusandae
              nobis?
            </p>
          </div>
        </div>
        <div className="imgC">
          <img src={study} alt="" />
        </div>
        <div className="colmR">
          <div className="boxDR boxK">
            <h1 style = {{color : '#FFC000'}}>Sports Facilities</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est,
              nisi. Voluptatem voluptas vitae libero sit in voluptatum
              temporibus eaque cumque.
            </p>
          </div>
          <div className="boxDR boxK">
            <h1 style = {{color : '#E97451'}}>Holistic Education</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              facilis odit quidem rerum deleniti tempora reiciendis voluptates
              libero illum corrupti.
            </p>
          </div>
          <div className="boxDR boxK">
            <h1 style = {{color : '#076585'}}>Transportation</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quas
              et animi facilis molestias ipsam assumenda deleniti quo recusandae
              nobis?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default details;
