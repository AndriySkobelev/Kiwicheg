import React from "react";

export const CaptionMenu = () => (
  <div className="caption_menu">
    <h2>Daily Menu</h2>
    <span
      style={{
        background: `url(http://lisyonok.ucoz.ru/_ld/0/25972.png) no-repeat`,
        backgroundSize: `contain`
      }}
    />
    <style>{`
      .caption_menu{
        font-weight: 100;
        position: relative;
        content: " ";
        align-item: center;
        display: flex;    
        justify-content: center;
        margin: 50px 0;
        height: 20%;                    
        text-align: center;
        width: 100%;
      }
      .caption_menu span{
        position: absolute;
        width: 20%;
        height: 200%;
        background-size: contain;
        right: -50px;
        top: -76px;
      }
      .caption_menu h2{
        font-family: 'Fredericka the Great', cursive;
        font-weight: 100; 
        margin: 20px;       
        width: 80%;
        color: white;
        font-size: 90px;
        line-height: 60px;
      }
    `}</style>
  </div>
);

export default CaptionMenu;
