import React from "react";
import linkedin from "../assets/icons/linkedin.svg";
import email from "../assets/icons/email.svg";
import phone from "../assets/icons/phone.svg";

export function Contact() {
  return (
    <React.Fragment>
      <footer id="contact">
        <p>
          <span>
            <img src={linkedin} alt="" />
            <a href="https://www.linkedin.com/in/lucasmramires/">LinkedIn</a>
          </span>

          <span>
            <img src={email} alt="" />
            <a href="mailto:lucasm.ramires@hotmail.com">
              lucasm.ramires@hotmail.com
            </a>
          </span>

          <span>
            <img src={phone} alt="" />
            <a href="https://wa.me/555183497704">555198349-7704</a>
          </span>
        </p>
      </footer>
    </React.Fragment>
  );
}
