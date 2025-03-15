import React from "react";
import TaskSection from "../components/TaskSection";

function HomePage() {
  return (
    <>
      <div className="grid grid-cols-3 items-center gap-3 my-5 p-5">
        <TaskSection taskName="Todo" taskType="1"/>
        <TaskSection taskName="Doing" taskType="2"/>
        <TaskSection taskName="Done" taskType="3"/>
      </div>
    </>
  );
}

export default HomePage;
