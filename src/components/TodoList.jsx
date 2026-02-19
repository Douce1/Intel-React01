import "./TodoList.css";
import { useState, useEffect } from "react";

function TodoItem({ todo, isDoneToggle, deleteTodo }) {
  return (
    <li className={todo.isDone ? "completed" : ""}>
      <input
        type="checkbox"
        checked={todo.isDone} // defaultChecked 대신 checked 권장
        onChange={() => {
          isDoneToggle(todo.id);
        }}
      />
      <span>{todo.task}</span>
      <button onClick={() => deleteTodo(todo.id)}>✖️</button>
    </li>
  );
}

function TodoList() {
  // 1. 로컬 스토리지 에러 방지 (try-catch 적용)
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem("todos");
      // 데이터가 있고, "undefined"라는 문자열이 아닐 때만 파싱
      if (saved && saved !== "undefined") {
        return JSON.parse(saved);
      }
      return [];
    } catch (error) {
      console.error("데이터 불러오기 실패:", error);
      return []; // 에러가 나면 빈 배열 반환해서 앱이 안 터지게 보호
    }
  });

  const [todoValue, setTodoValue] = useState("");
  const [showIncomplete, setShowIncomplete] = useState(false);

  const addTodo = () => {
    if (!todoValue.trim()) return;
    const newTodos = [
      ...todos,
      { id: Date.now(), task: todoValue.trim(), isDone: false },
    ];
    setTodos(newTodos);
    setTodoValue("");
  };

  function isDoneToggle(id) {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
    );
    setTodos(newTodos);
  }

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function deleteAll() {
    setTodos([]);
  }

  function deleteCompleted() {
    const newTodos = todos.filter((todo) => !todo.isDone);
    setTodos(newTodos);
  }

  const remainingCount = todos.filter((todo) => !todo.isDone).length;
  const displayedTodos = showIncomplete
    ? todos.filter((todo) => !todo.isDone)
    : todos;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo-wrapper">
      <div className="container">
        <img
          src="to-do.jpg" /* 2. 배포 환경을 위해 맨 앞의 슬래시(/) 제거 */
          alt="Banner"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "20px",
            marginBottom: "20px",
          }}
        />

        <h1>📝 오늘의 할일</h1>

        <div className="input-box">
          <input
            type="text"
            placeholder="할 일을 입력하세요"
            value={todoValue}
            onChange={(e) => {
              setTodoValue(e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                addTodo();
              }
            }}
          />
          <button onClick={addTodo}>추가</button>
        </div>

        <div className="status-bar">
          <span className="status-text">남은 할 일: {remainingCount}개</span>
          <div className="action-group">
            <button
              className="action-btn btn-filter"
              onClick={() => setShowIncomplete(!showIncomplete)}
            >
              {showIncomplete ? "전체 보기" : "미완료 보기"}
            </button>
            <button className="action-btn btn-delete" onClick={deleteCompleted}>
              완료 삭제
            </button>
            <button className="action-btn btn-delete" onClick={deleteAll}>
              전체 삭제
            </button>
          </div>
        </div>

        <ul className="todo-list">
          {displayedTodos.map((item) => (
            <TodoItem
              key={item.id}
              todo={item}
              isDoneToggle={isDoneToggle}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
