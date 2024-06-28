import React from "react";
import Hero from "../../components/hero/Hero";
import Watches from "../../components/watches/Watches";
import Products from "../../components/products/Products";
import About from "../../components/about/About";
import Email from "../../components/email/Email";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Watches />
      <Products />
      <About />
      <Email />
    </div>
  );
};

export default Home;
