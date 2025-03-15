// Breadcrumbs.jsx
import React from "react";
import { MdHome } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <nav
      className="flex bg-slate-200 border border-gray-200 py-3 px-5 rounded-lg"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="text-sm text-slate-900 hover:text-blue-400 inline-flex items-center"
          >
            <MdHome className="mr-1" /> Home
          </Link>
        </li>
        {paths.map((path, index) => {
          const routeTo = `/${paths.slice(0, index + 1).join("/")}`;
          const isLast = index === paths.length - 1;

          return (
            <li key={path}>
              <div className="flex items-center">
                
                <h5 className="mr-2 text-gray-400">/</h5>

                {isLast ? (
                  <span className="text-gray-400 text-sm font-medium dark:text-gray-500">
                    {path.charAt(0).toUpperCase() + path.slice(1)}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-slate-900 hover:text-blue-400 text-sm font-medium"
                  >
                    {path.charAt(0).toUpperCase() + path.slice(1)}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
