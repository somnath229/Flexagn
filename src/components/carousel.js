import React from "react";
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'

const carousel = () => {
    let slideIndex = 0;
    const showSlides = () => {
      console.log("hello")
      let i;
      let slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
          console.log(slides[i]);
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
    }
    setInterval(showSlides, 3000);
  return (
    <div className="carousel">
      <div className="slidecont">
        <div className="mySlides fade">
          <img src={img1} alt="loading"/>
        </div>

        <div className="mySlides fade">
          <img src={img2} alt="loading"/>
        </div>

        <div className="mySlides fade">
          <img src={img3} alt="loading"/>
        </div>
      </div>
    </div>
  );
};

export default carousel;
