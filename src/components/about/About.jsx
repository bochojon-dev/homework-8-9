import React from "react";
import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";
import rating from "../../assets/rating.svg";
import "../about/About.css";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about_contents">
          <div className="product_title">
            <h4>Here are our some of the best clients.</h4>
            <h2>What People Say About Us</h2>
          </div>
          <div className="about_cards">
            <div className="about_card">
              <img src={about1} alt="about" />
              <div className="about_texts">
                <h3>Hamza Faizi</h3>
                <p>
                  Don’t waste time, just order! This is the best website to
                  puschase smart watches.
                </p>
                <img src={rating} alt="rating" />
              </div>
            </div>
            <div className="about_card">
              <img src={about2} alt="about" />
              <div className="watch_texts">
                <h3>Hafiz Huzaifa</h3>
                <p>
                  I’ve been purchasing smart watches of Mohid for a long time.
                  All the products are good quality.
                </p>
                <img src={rating} alt="rating" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
