import React from "react";
import "./App.css";

function App() {
  const name = "반갑다 리액태헌 리액트 생태계는 널 원한다";
  return (
    <>
      {/* 이게 주석 작성방법입니다. */}
      <div
        className="react" // 이 안에서도 할 수 있꼬
      >
        {name}
      </div>
      // 하지만 이렇게 난리치면서 하면 /* 화면에 다 보이는 주석을 쓰고 있는
      겁니다 ㅎㅎ */
      <input />
    </>
  );
}

export default App;
