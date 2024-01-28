import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import display from "../styles/Display.module.css";

import home_icon from "../icons/home.png";
import chat_icon from "../icons/chatting.png";
import store_icon from "../icons/store.png";
import set_icon from "../icons/setting.png";

import home_icon_clicked from "../icons/home_clicked.png";
import chat_icon_clicked from "../icons/chatting_clicked.png";
import store_icon_clicked from "../icons/store_clicked.png";
import set_icon_clicked from "../icons/setting_clicked.png";

function Topbar({ now }) {
  const [nowHome, setNowHome] = useState(false);
  const [nowChat, setNowChat] = useState(false);
  const [nowStore, setNowStore] = useState(false);
  const [nowSet, setNowSet] = useState(false);

  useEffect(() => {
    if (now === "home") {
      setNowHome(true);
    } else if (now === "chat") {
      setNowChat(true);
    } else if (now === "store") {
      setNowStore(true);
    } else {
      setNowSet(true);
    }
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        bottom: "30px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <Link to="/main">
        <img
          src={nowHome ? home_icon_clicked : home_icon}
          alt="home"
          class={display.curserPointer}
          style={{ height: "30px", width: "30px", margin: "0 40px" }}
        />
      </Link>
      <Link to="/group">
        <img
          src={nowChat ? chat_icon_clicked : chat_icon}
          alt="chat"
          class={display.curserPointer}
          style={{ height: "30px", width: "30px", margin: "0 40px" }}
        />
      </Link>
      <Link to="/store">
        <img
          src={nowStore ? store_icon_clicked : store_icon}
          alt="store"
          class={display.curserPointer}
          style={{ height: "30px", width: "30px", margin: "0 40px" }}
        />
      </Link>
      <Link to="/setting">
        <img
          src={nowSet ? set_icon_clicked : set_icon}
          alt="set"
          class={display.curserPointer}
          style={{ height: "30px", width: "30px", margin: "0 40px" }}
        />
      </Link>
    </div>
  );
}

export default Topbar;
