import React from "react";
import "./HeroSection.css";
import homeImg from "./assets/home-img.png";

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          {/* الصورة */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img src={homeImg} alt="Taxi App" className="img-fluid" />
          </div>

          {

          }
          <div className="col-md-6 text-end">
            <h1 className="hero-title">ابدأ رحلتك مع مشواري</h1>
            <p className="hero-description">
              وفر وقتك، واحجز بسهولة، وتابع رحلتك لحظة بلحظة مع "مشواري"،
              تقدر تحدد المعاد المناسب ليك، وتشوف وقت الوصول، وتدفع بالطريقة اللي تريحك.
            </p>

            { }
            {/* <div className="hero-buttons">
              <button className="btn btn-success"> المستخدم</button>
              <button className="btn btn-outline-success"> السائق</button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
