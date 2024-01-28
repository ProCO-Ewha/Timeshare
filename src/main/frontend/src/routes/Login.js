import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { GreetingBtn } from "../components/Button.js";

import display from "../styles/Display.module.css";
import input from "../styles/Input.module.css";
import btn from "../styles/Button.module.css";

function Login() {
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    navigate("/main");
  };
  return (
    <div class={`${display.xyCenter} ${display.greetingFont}`} align="center">
      <div id="login-form">
        <form onSubmit={onSubmitHandler}>
          <label class={display.absoluteLeft}>이메일</label>
          <br />
          <input
            type="email"
            value={Email}
            onChange={onEmailHandler}
            class={input.greetingInput}
          />
          <br />
          <br />
          <label class={display.absoluteLeft}>비밀번호</label>
          <br />
          <input
            type="password"
            value={Password}
            onChange={onPasswordHandler}
            class={input.greetingInput}
          />
          <br />
          <br />
          <div>
            <GreetingBtn btnname="로그인" />
          </div>
        </form>
        <div>
          <Link>아이디 찾기</Link>
          <br />
          <Link>비밀번호 찾기</Link>
        </div>
      </div>
      <br />
      <div>
        <GreetingBtn btnname="카카오톡으로 로그인" />
        <br />
        <GreetingBtn btnname="네이버로 로그인" />
        <br />
        <GreetingBtn btnname="구글 계정으로 로그인" />
      </div>
      <br />
      <div>
        <p style={{ margin: "0" }}>계정이 없으신가요?</p>
        <Link to="/signup">회원가입</Link>
      </div>
    </div>
  );
}

export default Login;
