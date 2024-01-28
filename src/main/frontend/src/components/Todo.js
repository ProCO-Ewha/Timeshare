import { useState } from "react";

import { AddBtn } from "../components/Button.js";

import display from "../styles/Display.module.css";

function Todo() {
  const [todoOn, setTodoOn] = useState(false);
  function todo_on() {
    if (todoOn) {
      setTodoOn(false);
    } else {
      setTodoOn(true);
    }
  }
  return (
    <div>
      <div
        style={{ display: "flex", margin: "20px 0 0 0", position: "relative" }}
      >
        <h3 class={display.sejongFont} style={{ margin: "5.5px 0" }}>
          할일
        </h3>
        <div onClick={todo_on}>
          <AddBtn />
        </div>
      </div>
      <div style={{ backgroundColor: "whitesmoke" }}>todo-list</div>
      <div>
        {todoOn ? (
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

export default Todo;
