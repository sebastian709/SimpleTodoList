import React from "react";
import { RxLapTimer } from "react-icons/rx";
import { FaHourglass } from "react-icons/fa6";
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import TaskAssigneeTag from "../buttons/TaskAssigneeTag";

const TaskCard = (props) => {
  return (
    <>
      <div className="p-5 border-2 border-slate-300 w-full rounded-md flex flex-col gap-2">
        <div className="flex items-center">
          <span className="mr-3">
            {props.taskType == 1 ? (
              <FaHourglass />
            ) : props.taskType == 2 ? (
              <RxLapTimer />
            ) : (
              <FaRegCheckCircle />
            )}
          </span>
          <h4 className="font-bold">Title</h4>

          <span className="ml-auto text-red-500">
            <FaRegTimesCircle />
          </span>
        </div>
        <div className="flex flex-col text-xs">
          <p className="font-bold">Description:</p>
          <p className="text-justify px-2 py-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="flex flex-col my-2">
          <p className="text-xs font-bold">Assignee:</p>
          <div className="flex flex-wrap px-2 py-1 gap-1">
            <TaskAssigneeTag fullName="Juan Dela Cruz" />
            <TaskAssigneeTag fullName="Pedro" />
            <TaskAssigneeTag fullName="Test" />
            <TaskAssigneeTag fullName="Test 2" />
            <TaskAssigneeTag fullName="Test 3" />
            <TaskAssigneeTag fullName="asdfasdfasd" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
