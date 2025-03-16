import React from "react";
import TaskCard from "./TaskCard";
import TaskCardDropZone from "../buttons/TaskCardDropZone";
import { BsThreeDots } from "react-icons/bs";
import OpenModal from "../buttons/OpenModal";


const TaskSection = (props) => {
  return (
    <>
      <div className="w-full flex flex-col gap-1">
        <div className="flex w-full gap-2 items-center">
          <p className="flex-grow text-lg font-bold">{props.taskName}</p>
          {props.taskType == 1 && <OpenModal />}
          <BsThreeDots size={20} className="cursor-pointer"/>
        </div>

        <TaskCard taskType={props.taskType}/>
        <TaskCard taskType={props.taskType}/>
        <TaskCardDropZone />
      </div>
    </>
  );
};

export default TaskSection;
