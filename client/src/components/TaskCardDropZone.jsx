import React from "react";
import { FiPlusCircle } from "react-icons/fi";

const TaskCardDropZone = () => {
  return (
    <>
      <div className="flex gap-2 border-2 rounded-md bg-gray-50 py-2 border-dashed justify-center items-center">
        <FiPlusCircle />
        <p htmlFor="">Add Task</p>
      </div>
    </>
  );
};

export default TaskCardDropZone;
