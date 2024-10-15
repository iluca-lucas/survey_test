import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const SurveyForm = () => {
  const [satisCheckedValue, setSatisCheckedValue] = useState("");
  const [whatCheckedValue, setWhatCheckedValue] = useState("");

  const checkboxCss =
    "appearance-none h-6 w-6 border mx-2 border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none";

  const supabase = createClient(
    "https://pildhzxxciaiubihlmpb.supabase.co",
    process.env.REACT_APP_SUPABASE_KEY as string
  );

  const handleSatisChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSatisCheckedValue(e.target.value);
    console.log(e.target.value);
  };

  const handleWhatChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWhatCheckedValue(e.target.value);
    console.log(e.target.value);
  };

  const fetchingData = async () => {
    let { data: surveys2, error } = await supabase.from("surveys2").select("*");
    console.log(surveys2);

    if (error) {
      console.log(error);
    }
  };

  const insertData = async (e: React.FormEvent) => {
    e.preventDefault();
    const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" });
    if (satisCheckedValue === "") {
      alert("Please select your experience.");
      return;
    } else if (satisCheckedValue === "yes" && whatCheckedValue === "") {
      alert("Please select what you liked the most.");
      return;
    } else if (satisCheckedValue === "no" && whatCheckedValue !== "") {
      setWhatCheckedValue("");
      return;
    }
    const { data, error } = await supabase
      .from("surveys2")
      .insert([
        { yesorno: satisCheckedValue, bestthing: whatCheckedValue, time: now },
      ]);
    alert("Thank you for your response!");
    console.log(data);
    window.location.reload();

    if (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingData();
  });

  return (
    <form onSubmit={insertData} className="text-center w-full p-10">
      <h1 className="font-mono text-3xl p-0 w-[200px] mx-auto">Survey Form</h1>
      <div className="w-full mx-auto text-center mt-[40px]">
        <h4 className="text-xs">사용 경험은 만족스러우셨습니까?</h4>
        <div className="mx-auto mt-4 justify-between">
          <input
            type="checkbox"
            id="yes"
            name="experience"
            value="yes"
            className={checkboxCss}
            checked={satisCheckedValue === "yes"}
            onChange={handleSatisChecked}
          />
          <label htmlFor="yes">예</label>
          <input
            type="checkbox"
            id="no"
            name="experience"
            value="no"
            className={checkboxCss}
            checked={satisCheckedValue === "no"}
            onChange={handleSatisChecked}
          />
          <label htmlFor="no">아니오</label>
        </div>
      </div>
      {satisCheckedValue === "yes" && (
        <div>
          <h4 className="mt-[40px]">어떤점이 가장 마음에 드셨습니까?</h4>
          <input
            type="checkbox"
            id="table"
            name="experience"
            value="table"
            className={checkboxCss}
            checked={whatCheckedValue === "table"}
            onChange={handleWhatChecked}
          />
          <label htmlFor="table">테이블기능</label>
          <input
            type="checkbox"
            id="sterilization"
            name="experience"
            value="sterilization"
            className={checkboxCss}
            checked={whatCheckedValue === "sterilization"}
            onChange={handleWhatChecked}
          />
          <label htmlFor="sterilization">살균기능</label>
          <input
            type="checkbox"
            id="advertisement"
            name="experience"
            value="advertisement"
            className={checkboxCss}
            checked={whatCheckedValue === "advertisement"}
            onChange={handleWhatChecked}
          />
          <label htmlFor="advertisement">광고기능</label>
        </div>
      )}

      <button
        type="submit"
        className="mt-[50px] bg-sky-500 py-2 px-3 rounded-xl hover:bg-sky-900 hover:text-white"
      >
        submit
      </button>
    </form>
  );
};

export default SurveyForm;
