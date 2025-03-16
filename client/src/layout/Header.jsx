import React from 'react'

import { IoIosNotifications,IoIosSettings } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className='flex justify-between gap-4 bg-slate-800 px-5 py-5 items-center sticky top-0'>
        {/* Page Title */}
        <h5 className='text-white font-bold'>Todo List</h5>

        {/* Other Tools */}
        <div className="flex gap-5 items-center">
            <ul className='flex gap-5 text-white'>
                <IoIosNotifications size={28}/>
                <FaEnvelope size={28} />
                <IoIosSettings size={28} />
            </ul>
            
        </div>
      </div>
    </>
  )
}

export default Header
