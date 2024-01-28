import {
  getDate,
  getDay,
  getMonth,
  getYear,
  getDaysInMonth,
  subMonths,
  setDate,
} from "date-fns";
import { useState } from "react";

import { TodayBtn } from "./Button.js";

import display from "../styles/Display.module.css";

import prev_icon from "../icons/prev.png";
import next_icon from "../icons/next.png";

const DATE_MONTH_FIXER = 1;
const CALENDER_LENGTH = 35;
const DEFAULT_TRASH_VALUE = 0;
const DAY_OF_WEEK = 7;
const DAY_LIST = ["일", "월", "화", "수", "목", "금", "토"];

const CreateCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  // 오늘 날짜 정보
  const totalMonthDays = getDaysInMonth(currentDate);
  // 이번 달 총 날짜 수 (28/29/30/31)

  // 이전 달의 마지막 날 날짜와 요일 구하기
  const startDay = new Date(getYear(currentDate), getMonth(currentDate), 1);

  const prevDayList = Array.from({
    length: startDay.getDay(),
  }).map(() => DEFAULT_TRASH_VALUE);
  // 지난 달 list (0으로 초기화)

  const currentDayList = Array.from({ length: totalMonthDays }).map(
    (_, i) => i + 1
  );
  // 이번 달 list (1~말일)

  let nextDayList;
  if (prevDayList.length + totalMonthDays < CALENDER_LENGTH + 1) {
    nextDayList = Array.from({
      length: CALENDER_LENGTH - totalMonthDays - prevDayList.length,
    }).map(() => DEFAULT_TRASH_VALUE);
  } else {
    nextDayList = Array.from({
      length:
        CALENDER_LENGTH + DAY_OF_WEEK - totalMonthDays - prevDayList.length,
    }).map(() => DEFAULT_TRASH_VALUE);
  }
  // 다음 달 list (0으로 초기화)

  const currentCalendarList = prevDayList.concat(currentDayList, nextDayList);
  // 달력에 표시할 전체 날짜 (0,0,0,1,2,3,...,29,30,31,0)

  return {
    currentCalendarList: currentCalendarList,
    currentDate: currentDate,
    setCurrentDate: setCurrentDate,
  };
};

function Calendar() {
  const calendar = CreateCalendar();
  return (
    <div>
      <div style={{ display: "flex", margin: "26px 0" }}>
        <img
          src={prev_icon}
          alt="prev"
          class={display.curserPointer}
          onClick={() => {
            calendar.setCurrentDate(subMonths(calendar.currentDate, 1));
          }}
          style={{ height: "15px", width: "15px" }}
        />
        <h3 class={display.sejongFont} style={{ margin: "0 15px" }}>
          {getYear(calendar.currentDate)}년 {getMonth(calendar.currentDate) + 1}
          월
        </h3>

        <img
          src={next_icon}
          alt="next"
          class={display.curserPointer}
          onClick={() => {
            calendar.setCurrentDate(subMonths(calendar.currentDate, -1));
          }}
          style={{ height: "15px", width: "15px" }}
        />
        <div>
          <TodayBtn
            onClick={() => {
              calendar.setCurrentDate(Date());
            }}
          />
        </div>
      </div>
      <div
        style={{
          margin: "20px 0",
          //width: "480px",
          display: "grid",
          gridTemplateRows: "1fr ",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
        }}
      >
        {DAY_LIST.map((day) => (
          <div
            align="center"
            class={display.sejongFont}
            style={{
              //margin: "5px",
              height: "30px",
              color: "grey",
            }}
          >
            {day}
          </div>
        ))}
        {calendar.currentCalendarList.map((date, key) => (
          <div key={key} style={{ height: "87px" }}>
            {date ? (
              <div
                align="center"
                class={`${display.sejongFont} ${display.curserPointer}`}
                onClick={() => {
                  calendar.setCurrentDate(setDate(calendar.currentDate, date));
                }}
                style={{
                  borderRadius: "50px",
                  color: `${
                    getDate(calendar.currentDate) === date ? "white" : "grey"
                  }`,
                  backgroundColor: `${
                    getDate(calendar.currentDate) === date ? "black" : "white"
                  }`,
                }}
              >
                {date}
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
