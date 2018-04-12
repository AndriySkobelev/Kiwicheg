import React from "react";

export const Сaption = () => (
  <div className="caption">
    <h1>Del Gusto</h1>
    <div className="line">
      <div />
      <div />
    </div>
    <div className="button">EXSPLORE</div>
    <style>{`
    
      h1{
        font-family: 'Qwigley', cursive;
        font-size: 132px;
        font-weight: 100;
        line-height: 70px;
        color: #fff;
        margin: 0;
      }
      h1:first-letter{
        font-size: 150px;
      }
      .button{
        font-family: 'Fredericka the Great', cursive;
        font-weight: 100;  
        cursor: pointer;
        font-size: 20px;
        color: #fff;
        margin-top: 30px;
        padding: 5px 30px;
        border: 1px solid #fff;
      }
      .button:hover{
        color: #e58d29;
        border-color: #b77d37;
        background: none;
      }
      .line{
        display: flex;
        justify-content: space-between;
        width: 40%;
        height: 2px;
      }
      .line div:nth-child(1){
        width: 54%;
      }
      .line div:nth-child(2){
        width: 40%;
      }
      .line div{
        background-color: #fff;
        width: 45%;
        
      }
      .caption{
        margin-top: 90px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      @import url('https://fonts.googleapis.com/css?family=Berkshire+Swash');
    
    `}</style>
  </div>
);

export default Сaption;
