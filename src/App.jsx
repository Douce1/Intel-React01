import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation"; // 메뉴바 불러오기!

// lazy 없이 일반적인 방식으로 불러오기 (Vercel CSS 에러 완벽 해결)
import Home from "./components/Home";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import UpDown from "./components/UpDown";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      {/* 제가 실수로 지워버렸던 네비게이션 바를 부활시켰습니다! ✨ */}
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/updown" element={<UpDown />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
