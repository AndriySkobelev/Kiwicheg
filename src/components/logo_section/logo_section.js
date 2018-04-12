import React from "react";
import { Header } from "./header";
import { Сaption } from "./caption";

const bg_section =
  "https://i.pinimg.com/originals/0f/55/b4/0f55b46bf5647725ee3e08109a918e2f.jpg";

export const LogoSection = () => (
  <div className="logo-section">
    <Header />
    <Сaption />
    <style>{`
      .logo-section{
        height: 100vh;
        width: 100%;
        background: url(${bg_section})no-repeat center;
        background-size: cover;
      }

    `}</style>
  </div>
);

export default LogoSection;
