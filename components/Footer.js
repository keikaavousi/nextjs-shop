import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>
        Design and Develop by <a href="https://keikaavousi.com">Keikaavousi</a>
      </p>
      <style jsx>{`
        footer {
          padding: 10px;
          background-color: #000;
          color: #fff;
          text-align: center;
        }
        footer a {
          text-decoration: none;
          color: #fff;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
