import React from "react";
import StoryWraper from "../out_story/story-wraper";
import CaptionMenu from "./caption_menu";
import PositionMenu from "./position_menu";

const data_menu = [
  {
    name: "Mushroom Soup with bread",
    price: "4,90"
  },
  {
    name: "Chicken breast with onions and potatos",
    price: "11,90"
  },
  {
    name: "Cheesecake",
    price: "3,50"
  }
];

export const DailyMenu = props => (
  <div className="wraper daily-wrap">
    <CaptionMenu />
    <PositionMenu item_menu={data_menu} />
    <style>{`
      .daily-wrap{
        background: url(http://pbceda.org/wp-content/uploads/2017/04/chalkboard-easel-for-kid-chalkboard-powerpoint-background-1894-chalkboard-and-magnetic-board.jpg) no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        height: auto;
      }
    `}</style>
  </div>
);
export default DailyMenu;
