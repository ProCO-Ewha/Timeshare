import { useState } from "react";

import { GreetingBtn } from "../components/Button.js";

import display from "../styles/Display.module.css";
import btn from "../styles/Button.module.css";

function Timetable() {
  return (
    <div style={{ margin: "26px 40x" }}>
      <div id="schedule-list" style={{ backgroundColor: "whitesmoke" }}>
        <div>list today</div>
      </div>
    </div>
  );
}

export default Timetable;
