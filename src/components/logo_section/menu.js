import React from "react";

export const MenuItem = props => (
  <div className="menu_items">
    {props.menu}
    <style>{`
      .menu_items + .menu_items{
        margin-left: 20px;
      }
      .menu_items{
        font-family: 'Capriola', sans-serif;        
        font-size: 16px;
        line-height: 26px;
      }
      .menu_items:hover{
        font-family: 'Fredericka the Great', cursive;
        font-size: 22px;
        color: #ffd642;
        cursor: pointer;
      }
    `}</style>
  </div>
);
export const Menu = props => (
  <div className="menuWrap">
    {props.menu.map(item => <MenuItem menu={item} />)}

    <style>{`
      .menuWrap{
        display: flex;
        color: #fff;
        width: 45%;
        height: 20px;
      }
      
    `}</style>
  </div>
);
