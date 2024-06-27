import React from "react";
import "../hero/Hero.css";
import search from "../../assets/search-input.svg";
import watch from "../../assets/hero-image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero_contents">
          <div className="hero_texts">
            <h3>Discover Most Suitable Watches</h3>
            <p>
              Find the best, reliable, and cheap smart watches here. We focus on
              product quality. Here you can find smart watches of almost all
              brands. So why you are waiting? Just order now!
            </p>
            <form action="">
              <img src={search} alt="search" />
              <input type="search" placeholder="Finf the best brands" />
              <button>Search</button>
            </form>
          </div>
          <div className="hero_image">
            <img src={watch} alt="watch" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
