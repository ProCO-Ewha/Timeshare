import { Link } from "react-router-dom";
import { useState } from "react";

import { GreetingBtn } from "../components/Button.js";

import display from "../styles/Display.module.css";

function Greeting() {
  return (
    <div id="greeting" align="center" class={display.xyCenter}>
      <h1 class={display.logoFont}>TIMESHARE</h1>
      <div>
        <Link to="/login">
          <GreetingBtn btnname="로그인" />
        </Link>
        <br />
        <Link to="/signup">
          <GreetingBtn btnname="회원가입" />
        </Link>
      </div>
    </div>
  );
}

export default Greeting;
