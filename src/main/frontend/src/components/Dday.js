import { useState } from "react";

import { AddBtn } from "../components/Button.js";

import display from "../styles/Display.module.css";

function Dday() {
  const [DdayOn, setDdayOn] = useState(false);
  function d_day_on() {
    if (DdayOn) {
      setDdayOn(false);
    } else {
      setDdayOn(true);
    }
  }

  return (
    <div>
      <div
        style={{ display: "flex", margin: "20px 0 0 0", position: "relative" }}
      >
        <h3 class={display.sejongFont} style={{ margin: "5.5px 0" }}>
          디데이
        </h3>
        <div onClick={d_day_on}>
          <AddBtn />
        </div>
      </div>
      <div style={{ backgroundColor: "whitesmoke" }}>d-day-list</div>
      <div>
        {DdayOn ? (
          <form>
            <input />
          </form>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Dday;
