import { useState } from "react";

import Topbar from "../components/Topbar.js";
import Calendar from "../components/Calendar.js";
import Timetable from "../components/Timetable.js";
import Dday from "../components/Dday.js";
import Todo from "../components/Todo.js";
import Someday from "../components/Someday.js";

import { GreetingBtn } from "../components/Button.js";

function Main() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div
      style={{
        margin: "40px 120px",
      }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ width: "40%" }}>
          <Calendar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
        <div style={{ width: "35%" }}>
          <Timetable />
        </div>
        <div style={{ width: "25%" }}>
          <Dday />
          <Todo />
          <Someday />
        </div>
      </div>
      <Topbar now="home" />
    </div>
  );
}

export default Main;
