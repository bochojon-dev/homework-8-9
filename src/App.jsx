import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Watches from "./components/watches/Watches";
import Products from "./components/products/Products";
import About from "./components/about/About";
import Email from "./components/email/Email";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Watches />
      <Products />
      <About />
      <Email />
    </>
  );
}

export default App;
