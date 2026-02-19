import "./TodoList.css";
import { useState, useEffect } from "react";

const todoList = [];

function TodoItem({ todo, isDoneToggle, deleteTodo }) {
  return (
    <li className={todo.isDone ? "completed" : ""}>
      <input
        type="checkbox"
        defaultChecked={todo.isDone}
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
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  // const [todos, setTodos] = useState(todoList);
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
          src="/to-do.jpg"
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
