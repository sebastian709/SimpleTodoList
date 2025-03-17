import React from "react";
import TaskSection from "../components/containers/TaskSection";
import GroupBtnTask from "../components/buttons/GroupBtnTask";
function HomePage() {
  return (
    <>
      <div className="grid md:grid-cols-3  items-center gap-3 my-5 p-5">
        <GroupBtnTask/>
        <TaskSection taskName="To Do" taskType="1" />
        <TaskSection taskName="On Going" taskType="2" />
        <TaskSection taskName="Done" taskType="3" />
      </div>
    </>
  );
}

export default HomePage;
