import React from "react";

const logoUrl =
  "https://www.aspirerewards.com/app/home-page-assets/images/logo-restylane-refyne.png";

export const Logo = () => (
  <div className="logo">
    <style>
      {`
      .logo{
        width: 45%;
        height: 100px;
        background: url(${logoUrl}) no-repeat center center;
        background-size: contain;
      }
      
    `}
    </style>
  </div>
);

export default Logo;
