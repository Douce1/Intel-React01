import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

// lazy import — 해당 Route에 접근할 때만 컴포넌트 + CSS 로드
const Home = lazy(() => import("./components/Home"));
const Counter = lazy(() => import("./components/Counter"));
const TodoList = lazy(() => import("./components/TodoList"));
const UpDown = lazy(() => import("./components/UpDown"));
const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/updown" element={<UpDown />} />
        <Route path="" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
