import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Layout from "./Layout";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Todo from "./Components/Todo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="todo" element={<Todo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
