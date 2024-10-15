import React from "react";
import "./App.css";
import SurveyForm from "./components/SurveyForm";

function App() {
  return (
    <div className="w-[768px] max-w-sm:w-[414px] h-[700px] mx-auto">
      <div className="w-full bg-gray-400 mx-auto mt-[50px]">
        <SurveyForm />
      </div>
      <div className="w-24 h-24 mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-spin-slow" // 커스텀 클래스 적용
        >
          <g transform="rotate(0, 50, 50)">
            <circle cx="50" cy="50" r="10" fill="currentColor" />
            <path d="M88 50 L98 60 L93 73 L100 85 L88 88 L85 100 L73 93 L60 98 L50 88 L40 98 L27 93 L15 100 L12 88 L0 85 L7 73 L2 60 L12 50 L2 40 L7 27 L0 15 L12 12 L15 0 L27 7 L40 2 L50 12 L60 2 L73 7 L85 0 L88 12 L100 15 L93 27 L98 40 L88 50 Z" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default App;
