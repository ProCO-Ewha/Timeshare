import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { GreetingBtn } from "../components/Button.js";

import display from "../styles/Display.module.css";
import input from "../styles/Input.module.css";
import btn from "../styles/Button.module.css";

function Signup() {
  const baseUrl = "http://localhost:8080";

  const navigate = useNavigate();

  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    await axios
      .get(baseUrl + "/" + { Username })
      .then((response) => {
        console.log(response.data);
        setUsername(response.data.userName);
        setPassword(response.data.password);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const onNicknameHandler = (event) => {
    setUsername(event.currentTarget.value);
  };
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    await axios
      .post(baseUrl + "/timeshare/login", {
        username: Username,
        email: Email,
        password: Password,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    //navigate("/login");
  };
  return (
    <div class={display.xyCenter}>
      <div id="signin-form">
        <form onSubmit={onSubmitHandler} class={display.greetingFont}>
          <label class={display.absoluteLeft}>닉네임</label>
          <br />
          <input
            type="text"
            value={Username}
            onChange={onNicknameHandler}
            class={input.greetingInput}
          />
          <br />
          <br />
          <label>이메일</label>
          <br />
          <input
            type="email"
            value={Email}
            onChange={onEmailHandler}
            class={input.greetingInput}
          />
          <br />
          <br />
          <label>비밀번호</label>
          <br />
          <input
            type="password"
            value={Password}
            onChange={onPasswordHandler}
            class={input.greetingInput}
          />
          <br />
          <br />
          <div
            style={{
              position: "relative",
              transform: "translateX(-100px)",
              left: "153px",
            }}
          >
            <GreetingBtn btnname="회원가입" />
          </div>
        </form>
      </div>
      <br />
      <div
        style={{
          position: "relative",
          transform: "translateX(-100px)",
          left: "153px",
        }}
      >
        <GreetingBtn btnname="카카오톡으로 로그인" />
        <br />
        <GreetingBtn btnname="네이버로 로그인" />
        <br />
        <GreetingBtn btnname="구글 계정으로 로그인" />
      </div>
      <br />
      <div class={display.greetingFont}>
        <p align="center" style={{ margin: "0" }}>
          계정이 있으신가요?
        </p>
        <div
          align="center"
          style={{
            width: "42px",
            position: "relative",
            transform: "translateX(-21px)",
            left: "153px",
          }}
        >
          <Link to="/login">로그인</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
