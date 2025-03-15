import React from "react";
import UseStateHook from "../hooks/UseStateHook";
import UseEffectHook from "../hooks/UseEffectHook";

const Demo = () => {
  return (
    <>
      <div className="flex">
        <UseStateHook />
        <UseEffectHook />
      </div>
    </>
  );
};

export default Demo;
