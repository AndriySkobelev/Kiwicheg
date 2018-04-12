import React from "react";

export const FooterItem =(props) => (
  <div>
    <div style={{ background: `url(${props.footerItems}) no-repeat center`, backgroundSize:`contain`}}></div>
    <style>{`
      .footerItem div{
        height: 35px;
        width: 35px;
        cursor: pointer;
        margin-right: 15px;
      }
      .footerItem {
        display: flex;
      }
    `}</style>
  </div>
);

export const Footer = (props) => (
  <div className="footer">
    <div className="footerItem">
      {props.itemf.map(itemf => <FooterItem footerItems={itemf} />)}      
    </div>
    <p>© 2018 Kiwicheg.COM ALL RIGHTS RESERVED</p>
    <style>{`
      .footer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: black;
        height: 20vh;
        width: 100%;
      }
      .footer p{
        color: #cecece;
      }
    `}</style>
  </div>
);

export default Footer;
