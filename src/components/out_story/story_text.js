import React from "react";

const ItemText = props => (
  <div className="itemText">
    <span
      style={{
        background: `url(http://www.vancitymommyd.com/wp-content/uploads/2018/01/chef-hat-clipart-free-chef-hat-clip-art-at-clker-vector-clip-art-online-royalty-space-clipart.png)no-repeat center`,
        backgroundSize: `contain`
      }}
    />
    <h2>{props.item.caption}</h2>
    <h4>{props.item.text}</h4>
    <div
      className="star"
      style={{
        background: `url(${props.item.img}) reat-x left`,
        backgroundSize: `contain`
      }}
    >
      {" "}
    </div>
    <p>{props.item.historyText}</p>
    <button>{props.item.button}</button>
    <style>
      {`
      .itemText{
        display: flex;
        flex-direction: column;
      }
      .itemText span{
        width: 120px;
        height: 120px;
        position: absolute;
        top: 49px;
        left: 110px;
        transform: rotate(10deg);
      }
      .itemText h2{
        font-family: 'Capriola', sans-serif;
        word-spacing: 15px;
        margin: 0;
        font-size: 35px;
        line-height: 34px;
      }
      .itemText h4{
        font-family: 'Capriola', sans-serif;        
        margin: 0;
        font-size: 15px;
        color: #e09900;
      }
      .itemText button{
        font-family: 'Fredericka the Great', cursive;
        font-weight: 100;  
        font-size: 18px;
        width: 25%;
        height: 5vh;
        color: #b77d37;
        background: none;
        border: 1px solid #d1934d;
        cursor: pointer;
        align-self: center;
      }
      .itemText button:hover{
        border-radius: 2px;
        background-color: #b77d37;
        color: #fff;
      }
      .itemText p{
        font-family: 'Coming Soon', cursive;
        font-size: 18px;
        font-weight: 1000;
        width: 70%;
        align-self: center;
      }
      .star{
        background:url(${props.item.img});
        height: 2vh;
        width: 42px;
        background-repeat: repeat-x;
        background-size: contain;
        align-self: center;
        margin: 20px 0;
      }
    
    `}
    </style>
  </div>
);

export const StoryText = props => (
  <div className="storyText">
    {props.context.map(itemText => <ItemText item={itemText} />)}
    <style>{`
       .storyText{
        position: relative;
        content: " ";
        display: flex;
        flex-direction: column;
        justify-content: center;  
        text-align: center;
        width: 45%;
        height: 100%;
      }
    `}</style>
  </div>
);

export default StoryText;
