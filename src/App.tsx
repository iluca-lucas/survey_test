import React from "react";
import "./App.css";
import SurveyForm from "./components/SurveyForm";

function App() {
  return (
    <div className="w-[414px] md:w-[768px] lg:w-[1024px] max-w-md:w-[414px] h-screen mx-auto">
      <div className="w-[414px] md:w-[768px] lg:w-[1024px] max-w-md:w-[414px] h-full bg-sky-400 py-[60px] rounded-lg mx-auto">
        <SurveyForm />
      </div>
    </div>
  );
}

export default App;
