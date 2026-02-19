import React, { useState } from "react";
import "./UpDown.css";

function InputComponent({ onClick }) {
  return <button onClick={onClick}>제출</button>;
}

function ResultComponent({ result, count }) {
  return (
    <div>
      <p id="result">{result}</p>
      {count > 0 && <p>총 시도 횟수: {count}회</p>}
    </div>
  );
}

function UpDown() {
  const [num, setNum] = useState(0);
  const [result, setResult] = useState("");
  const [correct, setCorrect] = useState(Math.floor(Math.random() * 100) + 1);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    const inputNum = parseInt(num);
    setCount(count + 1);

    if (inputNum > correct) {
      setResult("Down");
    } else if (inputNum < correct) {
      setResult("Up");
    } else {
      setResult("정답입니다");
    }
  };

  return (
    <div className="updown-wrapper">
      <div className="game-container">
        <h1>업앤다운 숫자 맞추기 게임</h1>
        <p>1부터 100 사이의 숫자를 맞춰보세요!</p>
        <div className="input-group">
          <input
            type="number"
            id="userInput"
            placeholder="숫자 입력"
            min="1"
            max="100"
            value={num}
            onChange={(e) => {
              setNum(e.target.value);
            }}
          />
          <InputComponent onClick={handleClick} />
          <ResultComponent result={result} count={count} />
        </div>
      </div>
    </div>
  );
}

export default UpDown;
