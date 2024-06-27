import React from "react";
import watch1 from "../../assets/watch1.png";
import watch2 from "../../assets/watch2.png";
import watch3 from "../../assets/watch3.png";
import "../watches/Watches.css";

const Watches = () => {
  return (
    <div className="watches">
      <div className="container">
        <div className="watch_contents">
          <div className="watch_card">
            <img src={watch1} alt="watch" />
            <div className="watch_texts">
              <h3>Apple</h3>
              <p>
                Apple is one of the most famous smart watches providing company.
              </p>
            </div>
          </div>
          <div className="watch_card">
            <img src={watch2} alt="watch" />
            <div className="watch_texts">
              <h3>Xiaomi</h3>
              <p>Xiaomi smart watches are produced by MI company.</p>
            </div>
          </div>
          <div className="watch_card">
            <img src={watch3} alt="watch" />
            <div className="watch_texts">
              <h3>Fit Bit</h3>
              <p>
                FitBit smart watches are best for there health and fitness
                features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watches;
