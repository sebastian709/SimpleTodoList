import React from 'react'
import { FaRegTimesCircle } from "react-icons/fa";

const TaskAssigneeTag = (props) => {
  return (
    <>
      <div className="flex items-center gap-2 bg-blue-900 text-white py-1 px-2 rounded-2xl">
        <p className='text-xs'>{props.fullName}</p>
        <FaRegTimesCircle size={15}/>
      </div>
    </>
  )
}

export default TaskAssigneeTag
