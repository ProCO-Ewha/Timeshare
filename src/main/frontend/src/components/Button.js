import { useState } from "react";

import display from "../styles/Display.module.css";
import btn from "../styles/Button.module.css";

function GreetingBtn({ btnname }) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <button
      class={`${btn.greetingBtn} ${display.curserPointer} ${
        isHovering ? `${btn.greetingBtnEnter}` : ""
      }`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {btnname}
    </button>
  );
}

function AddBtn() {
  const handleMouseOver = (e) => {
    e.target.classList.add(btn.scheduleBtnEnter);
  };

  const handleMouseOut = (e) => {
    e.target.classList.remove(btn.scheduleBtnEnter);
  };

  return (
    <button
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      class={`${btn.scheduleBtn} ${display.curserPointer}`}
      style={{
        width: "45px",
        position: "absolute",
        left: "55px",
      }}
    >
      추가
    </button>
  );
}

function TodayBtn({ onClick }) {
  const handleMouseOver = (e) => {
    e.target.classList.add(btn.scheduleBtnEnter);
  };

  const handleMouseOut = (e) => {
    e.target.classList.remove(btn.scheduleBtnEnter);
  };

  return (
    <button
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={onClick}
      class={`${btn.scheduleBtn} ${display.curserPointer}`}
      style={{
        width: "45px",
      }}
    >
      오늘
    </button>
  );
}
export { GreetingBtn, AddBtn, TodayBtn };
