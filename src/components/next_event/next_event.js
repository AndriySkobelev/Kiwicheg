import React from "react";
import StoryText from "../out_story/story_text";
import StoryImg from "../out_story/story_img";

const storyImg = [
  "https://pro-consulting.ua/uploads/files/Press%20centr/Inform-digest/specij.jpeg",
  "http://nanox.in.ua/wp-content/uploads/2016/08/crveno_meso_crop.jpg",
  "https://kiev.vj.ua/upload/%D1%81%D0%B5%D0%B7%D0%BE%D0%BD%D0%BD%D1%8B%D0%B5_%D0%B1%D0%BB%D1%8E%D0%B4%D0%B0_%D0%B2_%D0%B7%D0%B0%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F%D1%85_%D0%BA%D0%B8%D0%B5%D0%B2%D0%B01.png"
];
const contextBlock = [
  {
    caption: "NEXT EVENT",
    text: "BOOK TABLE FOR YOU NEXT VISIT",
    img:
      "(http://www.vancitymommyd.com/wp-content/uploads/2018/01/chef-hat-clipart-free-chef-hat-clip-art-at-clker-vector-clip-art-online-royalty-space-clipart.png)no-repeat center`",
    historyText:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga sunt in culpa qui officia deserunt.",
    button: "RESERVATION"
  }
];

export const NextEvetn = props => (
  <div className="nextEvent">
    <StoryText context={contextBlock} />
    <StoryImg img={storyImg} />
    <style>{`
      .nextEvent{
        display: flex;
        justify-content: space-around;
        height: 100vh;
        background-color: #f7f7f7;
      }
      .nextEvent .img_item{

        height: 30vh;
        align-self: center;
      }
      .nextEvent .story-img{
        display: grid;
        grid-template-columns: repeat(2, 45%);
        grid-template-rows: repeat(2, 35%);
        grid-gap: 30px;
        align-content: center;
      }
      .nextEvent .story-img div{
        width: auto;
        height: 100%;
        margin: 0;
      }
      .nextEvent button:hover{
        border-radius: 2px;
        background-color: #b77d37;
        color: #fff;
      }
      .nextEvent .story-img div:nth-child(2){ 
        grid-column: 2/3;
        grid-row: 1/3;
        height: 100%;
        align-self: center;
      }
      .nextEvent span{
        display: none;
      }
    
    `}</style>
  </div>
);

export default NextEvetn;
