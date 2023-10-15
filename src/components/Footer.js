import React from "react";

import { BsFillEnvelopeFill } from "react-icons/bs";
export const Footer = () => {
  return (
    <footer id="footer" className="mt-5">
      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>
              {" "}
              <BsFillEnvelopeFill /> ssubito47@gmail.com
            </span>
          </strong>
        </div>
      </div>
    </footer>
  );
};
