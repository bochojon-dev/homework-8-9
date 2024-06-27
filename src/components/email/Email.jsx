import React from "react";
import email from "../../assets/email.png";
import "../email/Email.css";

const Email = () => {
  return (
    <div className="email">
      <div className="container">
        <div className="email_contents">
          <div className="email_texts">
            <h3>Subscribe To Newsletter</h3>
            <p>Get free guide about smart watches daily. </p>
            <form action="">
              <input type="text" placeholder="Enter Email Address" />
              <button>Subscribe</button>
            </form>
          </div>
          <img src={email} alt="watch" />
        </div>
      </div>
    </div>
  );
};

export default Email;
