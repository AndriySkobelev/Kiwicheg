import React from "react";

export const ItemMenu = props => (
  <div className="item-menu">
    <div>
      <span className="knife" />
      <h5>{props.itemMenu.name}</h5>
    </div>

    <p>{props.itemMenu.price}$</p>
    <style>{`
      .item-menu{
        color: #fff;
        display: flex;        
        font-size: 30px;
        justify-content: space-between;
        margin: 20px 0;
      }
      .item-menu div{
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .item-menu span{
        width: 20px;
        height: 20px;
        background: url(https://static1.squarespace.com/static/58b5ce25414fb5adb04c448c/t/58eedcef46c3c4d2230c3280/1492049140939/knife+fork.png)no-repeat center;
        background-size: cover;
        margin-right: 40px;
        ;
      }
      .item-menu h5{
        font-family: 'Fredericka the Great', cursive;
        font-weight: 100;  
        font-size: 30px;        
        margin: 0;
      }
      .item-menu p{
        font-family: 'Fredericka the Great', cursive;
        font-weight: 100;  
        text-align: end;
        font-size: 20px;
        margin: 0;
        width: 10%;        
      }
    `}</style>
  </div>
);

export const PositionMenu = props => (
  <div className="position-menu">
    {props.item_menu.map(item => <ItemMenu itemMenu={item} />)}

    <style>{`
      .position-menu{
        width: 70%;
        margin: 0 auto;
      }
    `}</style>
  </div>
);

export default PositionMenu;
