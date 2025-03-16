import React from "react";
import NavbarButton from "../components/buttons/NavbarButton";
import { MdHome, MdCheckCircleOutline,MdOutlineVideogameAsset } from "react-icons/md";


function SideBar() {
  return (
    <>
      <div className="flex flex-col h-screen w-60 fixed bg-zinc-800">
        <div className="flex justify-center items-center gap-4 py-5">
          {/* <img src={SCJLogo} alt="SCJ Logo" className="h-10" /> */}
          <h5 className="text-white font-bold">Todo List</h5>
        </div>
        <div className="flex flex-col mt-10">
          <NavbarButton IconComponent={MdHome} label="Home" to="/" />
          <hr className="border-t border-slate-600" />
          <NavbarButton IconComponent={MdCheckCircleOutline} label="My Task" to="/my-task"/>
          <hr className="border-t border-slate-600" />
          <NavbarButton IconComponent={MdOutlineVideogameAsset} label="demo" to="/demo"/>
        </div>
      </div>
    </>
  );
}

export default SideBar;
