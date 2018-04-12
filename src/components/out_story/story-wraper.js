import React from "react";
import { StoryContent } from "./story-content";

export const StoryWraper = () => (
  <div className="wraper">
    <StoryContent />
    <style>{`
      .wraper{
        width: 100%;
        height: 100%;
        padding: 0 50px;
        background-color: #f7f7f7;
      }
    `}</style>
  </div>
);

export default StoryWraper;
