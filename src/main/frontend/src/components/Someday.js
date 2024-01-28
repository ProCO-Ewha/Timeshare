import { useState } from "react";

import { AddBtn } from "../components/Button.js";

import display from "../styles/Display.module.css";

function Someday() {
  const [somedayOn, setSomedayOn] = useState(false);
  function someday_on() {
    if (somedayOn) {
      setSomedayOn(false);
    } else {
      setSomedayOn(true);
    }
  }
  return (
    <div>
      <div
        style={{ display: "flex", margin: "20px 0 0 0", position: "relative" }}
      >
        <h3 class={display.sejongFont} style={{ margin: "5.5px 0" }}>
          언젠가
        </h3>
        <div onClick={someday_on}>
          <AddBtn />
        </div>
      </div>
      <div style={{ backgroundColor: "whitesmoke" }}>someday</div>
      <div>
        {somedayOn ? (
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

export default Someday;
