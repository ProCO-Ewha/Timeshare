import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Greeting from "./routes/Greeting.js";
import Login from "./routes/Login.js";
import Signup from "./routes/Signup.js";
import Main from "./routes/Main.js";
import Group from "./routes/Group.js";
import Store from "./routes/Store.js";
import Setting from "./routes/Setting.js";

/**function App() {
    const [hello, setHello] = useState('');

    useEffect(() => {
        axios.get('/api/test')
            .then((res) => {
                setHello(res.data);
            })
    }, []);
    return (
        <div className="App">
            백엔드 데이터 : {hello}
        </div>
    );
} */
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/setting" exact element={<Setting />} />
          <Route path="/store" exact element={<Store />} />
          <Route path="/group" exact element={<Group />} />
          <Route path="/main" exact element={<Main />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/" exact element={<Greeting />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
