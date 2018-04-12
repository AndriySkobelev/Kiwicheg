import React from "react";
import { render } from "react-dom";
import { Container } from "./containers/page1";

const App = () => (
  <div className="main-wraper">
    <Container />
    <style>
      {`
      @import url('https://fonts.googleapis.com/css?family=Fredericka+the+Great');
      @import url('https://fonts.googleapis.com/css?family=Qwigley');
      @import url('https://fonts.googleapis.com/css?family=Capriola');
      body {
        margin: 0;
        padding: 0;
      }
      *{
        box-sizing: border-box;
      }
      .main-wraper{
        height: 100vh;
      }

    `}
    </style>
  </div>
);
render(<App />, document.getElementById("root"));
