import React from "react";
import LogoSection from "../components/logo_section/logo_section";
import StoryWraper from "../components/out_story/story-wraper";
import DailyMenu from "../components/daily_menu/daily_menu";
import Ingredients from "../components/ingredients/ingredients";
import NextEvetn from "../components/next_event/next_event";
import Footer from "../components/footer/footer";

const footerItem = [
  "http://www.iconsplace.com/download/orange-facebook-2-512.png",
  "http://www.iconsplace.com/download/orange-twitter-2-512.png",
  "http://www.iconsplace.com/icons/preview/orange/instagram-2-256.png",
  "http://www.iconsplace.com/download/orange-pinterest-512.png"
];

export const Container = props => (
  <div className="container_wrap">
    <LogoSection />
    <StoryWraper />
    <DailyMenu />
    <Ingredients />
    <NextEvetn />
    <Footer itemf={footerItem} />
    <style>
      {`
      .container_wrap{
        width: 100%;
        height: 100%;
        background-color: #111;
      }

    `}
    </style>
  </div>
);
export default Container;
