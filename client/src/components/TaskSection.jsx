import React from "react";
import TaskCard from "./TaskCard";
import TaskCardDropZone from "./TaskCardDropZone";
import { FiPlusSquare } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

const TaskSection = (props) => {
  return (
    <>
      <div className="w-full flex flex-col gap-1">
        <div className="flex w-full gap-2 items-center">
          <p className="flex-grow text-lg font-bold">{props.taskName}</p>
          <FiPlusSquare size={20}/>
          <BsThreeDots size={20}/>
        </div>

        <TaskCard taskType={props.taskType}/>
        <TaskCard taskType={props.taskType}/>
        <TaskCardDropZone />
      </div>
    </>
  );
};

export default TaskSection;
