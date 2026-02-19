// import React, { Suspense, lazy } from "react";
// import { Routes, Route } from "react-router-dom";
// import Navigation from "./components/Navigation";

// // lazy import — 해당 Route에 접근할 때만 컴포넌트 + CSS 로드
// const Home = lazy(() => import("./components/Home"));
// const Counter = lazy(() => import("./components/Counter"));
// const TodoList = lazy(() => import("./components/TodoList"));
// const UpDown = lazy(() => import("./components/UpDown"));
// const NotFound = lazy(() => import("./components/NotFound"));

// function App() {
//   return (
//     <div>
//       <Navigation />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/counter" element={<Counter />} />
//         <Route path="/todolist" element={<TodoList />} />
//         <Route path="/updown" element={<UpDown />} />
//         <Route path="" element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";

// 1. 말썽을 일으키던 lazy와 Suspense를 모두 지우고, 일반 import로 바꿨습니다.
import Home from "./components/Home";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import UpDown from "./components/UpDown";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      {/* 2. Suspense로 감쌌던 부분을 제거했습니다. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/updown" element={<UpDown />} />
        <Route path="*" element={<NotFound />} />{" "}
        {/* 잘못된 경로는 "*" 로 처리하는 것이 정석입니다. */}
      </Routes>
    </div>
  );
}

export default App;
