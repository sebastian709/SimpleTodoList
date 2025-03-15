import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import MyTask from "../pages/MyTask";
import Demo from "../pages/Demo"

function Content() {
  return (
    <>
      <div className="flex flex-col m-2">
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/my-task" element={<MyTask />}></Route>
          <Route path="/demo" element={<Demo />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default Content;
