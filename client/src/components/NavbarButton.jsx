import React from "react"
import { Link } from "react-router-dom"

const NavbarButton = (props) => {
  return (
    <div>
      <Link to={props.to} className="flex text-white gap-2 py-3 pl-14 items-center hover:bg-slate-500 w-full">
        <props.IconComponent size={24} />
        <h4 className="text-xl">{props.label}</h4>
      </Link>
    </div>
  );
};

export default NavbarButton;
