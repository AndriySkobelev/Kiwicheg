import React from "react";
import StoryText from "../out_story/story_text";
import StoryImg from "../out_story/story_img";

const storyImg = [
  "https://pro-consulting.ua/uploads/files/Press%20centr/Inform-digest/specij.jpeg",
  "http://nanox.in.ua/wp-content/uploads/2016/08/crveno_meso_crop.jpg"
];
const contextBlock = [
  {
    caption: "INGREDIENTS",
    text: "FOR YOU SELECTED FROM ALL OVER THE WORLD",
    img:
      "(http://www.vancitymommyd.com/wp-content/uploads/2018/01/chef-hat-clipart-free-chef-hat-clip-art-at-clker-vector-clip-art-online-royalty-space-clipart.png)no-repeat center`",
    historyText:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga sunt in culpa qui officia deserunt.",
    button: "MENU"
  }
];

export const Ingredients = props => (
  <div className="ingredients">
    <StoryImg img={storyImg} />
    <StoryText context={contextBlock} />
    <style>{`
      .ingredients{
        display: flex;
        justify-content: space-around;
        height: 100vh;
        background-color: #f7f7f7;
      }
      .ingredients .img_item{
        height: 70vh;
        align-self: center;
      }
      .ingredients span{
        display: none;
      }
      .ingredients .itemText buttonn:hover{
        border-radius: 50%;
      }
    
    `}</style>
  </div>
);

export default Ingredients;
