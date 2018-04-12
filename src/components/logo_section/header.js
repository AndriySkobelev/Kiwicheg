import React from "react";
import { Logo } from "./logo";
import { Menu } from "./menu";

const menuItem = [
  "Home",
  "About",
  "Menu",
  "Reservetion",
  "Calling",
  "Contucts"
];

export const Header = () => (
  <div className="header">
    <Logo />
    <Menu menu={menuItem} />
    <style>{`
     .header{
        padding-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
     }
    `}</style>
  </div>
);

export default Header;
