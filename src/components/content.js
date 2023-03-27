import React from "react";
import lib from './lib.jpg'


const content = () => {
  return (
    <div className="content">
      <div className="heading">
        <h1>
          <span>WELCOME TO</span> FLEXAGN SCHOOL
        </h1>
      </div>
      <div className="contBody">
        <div className="parabody">
          <p className="para">
            <span>Flexagn School</span> is a co-educational day boarding school
            which offers the play way method of learning for Preschool and the
            Central Board of Secondary Education (CBSE affiliation number:
            130371) syllabus for higher classes. The school currently offers
            classes from Kindergarten to grade 12 with Hindi, Sanskrit as second
            and third language options.
          </p>
          <button className="btnP">Read More</button>
        </div>
        <div className="imgB">
          <img src={lib} alt="" />
        </div>
        <div className="frbtn">
          <button className="btnFr" style = {{background : '#076585'}}>QUICK ACCES</button>
          <button className="btnFr" style = {{background : '#15C9CA'}}>Check Student Life</button>
          <button className="btnFr" style = {{background : '#FF5F1F'}}>Apply for Admission</button>
          <button className="btnFr" style = {{background : '#22cb22'}}>Apply for job</button>
        </div>
      </div>
    </div>
  );
};

export default content;
