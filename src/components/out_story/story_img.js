import React from "react";

export const ImgItems = props => (
  <div
    className="img_item"
    style={{
      background: `url(${props.img}) no-repeat center`,
      backgroundSize: `cover`
    }}
  >
    <style>{`
     .img_item{
      width: 35%;
      height: 30%; 
      border: 10px solid #f2f2f2;
      outline: #d6d6d6 solid 1px;      
      margin: 15px;
      padding: 10px;
     }

    `}</style>
  </div>
);
export const StoryImg = props => (
  <div className="story-img">
    {props.img.map(item => <ImgItems img={item} />)}
    <style>{`
      .story-img{
        width: 45%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;

      }
    `}</style>
  </div>
);

export default StoryImg;
