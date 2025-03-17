import React from "react";
import { useState } from "react";

const GroupBtnTask = () => {
  const [activeTab, setActiveTab] = useState("toDoBtn");

  const buttons = [
    {id: "toDoBtn", label: "To Do" },
    {id: "onGoingBtn", label: "On Going" },
    {id: "doneBtn", label: "Done" }
  ]; 

  return (
    <div className="xs:row xs:flex xs:w-full md:hidden sm:hidden">
      {buttons.map((btn, index) => (
        <button
          key={btn.id}
          onClick={() => setActiveTab(btn.id)} // Clicking changes the active button
          className={`w-full py-2 px-4 text-center text-sm transition-all hover:shadow-lg border-slate-300 ${
            activeTab === btn.id
              ? "bg-slate-800 text-white border-slate-800" // Stay active
              : "text-slate-600 hover:text-white hover:bg-slate-800"
          } ${
            index === 0
              ? "rounded-md rounded-r-none" // First button
              : index === buttons.length - 1
              ? "rounded-md rounded-l-none border-l" // Last button
              : "border-l border-r" // Middle button
          }`}
          type="button"
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

export default GroupBtnTask;
