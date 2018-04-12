import React from "react";
import { StoryText } from "./story_text";
import { StoryImg } from "./story_img";

const storyImg = [
  "https://pro-consulting.ua/uploads/files/Press%20centr/Inform-digest/specij.jpeg",
  "https://i.pinimg.com/236x/ab/ee/71/abee712e1fca4ff3a4a96c8b50419476.jpg",
  "http://nanox.in.ua/wp-content/uploads/2016/08/crveno_meso_crop.jpg",
  "https://kiev.vj.ua/upload/%D1%81%D0%B5%D0%B7%D0%BE%D0%BD%D0%BD%D1%8B%D0%B5_%D0%B1%D0%BB%D1%8E%D0%B4%D0%B0_%D0%B2_%D0%B7%D0%B0%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F%D1%85_%D0%BA%D0%B8%D0%B5%D0%B2%D0%B01.png"
];

const contextBlock = [
  {
    caption: "OUR STORY",
    text: "DEL GUSTO A CREATE MUSE TEMPLATE",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Black_Star.svg/2000px-Black_Star.svg.png",
    historyText:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga sunt in culpa qui officia deserunt.",
    button: "ABOUT US"
  }
];

export const StoryContent = props => (
  <div className="storyContent">
    <StoryText context={contextBlock} />
    <StoryImg img={storyImg} />
    <style>{`
      .storyContent{
        display: flex;
        height: 100%;
      }
      .storyContent .storyText{
        width: 50%;
      }

    `}</style>
  </div>
);

export default StoryContent;
