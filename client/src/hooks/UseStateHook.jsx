import React, { useState } from "react";

const UseStateHook = () => {
  const [state, setState] = useState({
    count: 4,
    color: "bg-white",
    textColor: "text-black",
  });

  const IncrementCount = () => {
    setState((prevState) => {
      return {
        count: prevState.count + 1,
        color: prevState.color,
        textColor: prevState.textColor,
      };
    });
  };

  const DecrementCount = () => {
    setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count - 1
        
      };
    });
  };

  const ResetCount = () => {
    setState((prevState)=>{
        return {
            ...prevState,
            count: 0
        }
    });
  };

  const themeButton = (e) => {
    const bgColor = e.target.dataset.bgcolor;
    const textColor = e.target.dataset.textcolor;

    // setState({color: bgColor, textColor: textColor})

    setState((prevState) => {
      return {
        ...prevState,
        color: bgColor,
        textColor: textColor,
      };
    });
  };

  return (
    <>
      <div className="flex flex-col border items-center border-gray-500 my-10">
        <label
          htmlFor="useState Hooks"
          className="text-center pb-3 mt-4 w-80 border-b font-bold border-blue-500 mb-5"
        >
          USESTATE HOOKS
        </label>
        <div
          className={`flex flex-col border items-center p-5 ${state.color} ${state.textColor}`}
        >
          <h1>Number</h1>
          <h1 className="text-4xl font-bold">{state.count}</h1>
        </div>
        <div className="flex gap-3 my-5">
          <button
            onClick={IncrementCount}
            className="bg-blue-600 py-2 px-5 rounded-md text-white font-bold"
          >
            +
          </button>
          <button
            onClick={ResetCount}
            className="bg-indigo-600 py-2 px-5 rounded-md text-white"
          >
            Reset
          </button>
          <button
            onClick={DecrementCount}
            className="bg-red-600 py-2 px-5 rounded-md text-white font-bold"
          >
            -
          </button>
        </div>

        <div className="flex flex-col gap-3 mb-2 items-center">
          <label htmlFor="" className="font-bold">
            Theme
          </label>
          <div className="flex gap-1">
            <button
              onClick={themeButton}
              data-bgcolor="bg-white"
              data-textcolor="text-black"
              className="bg-white text-transparent border py-1 px-3 rounded-md"
            >
              C
            </button>
            <button
              onClick={themeButton}
              data-bgcolor="bg-blue-500"
              data-textcolor="text-white"
              className="bg-blue-500 text-transparent border py-1 px-3 rounded-md"
            >
              C
            </button>
            <button
              onClick={themeButton}
              data-bgcolor="bg-indigo-500"
              data-textcolor="text-white"
              className="bg-indigo-500 text-transparent border py-1 px-3 rounded-md"
            >
              C
            </button>
            <button
              onClick={themeButton}
              data-bgcolor="bg-cyan-500"
              data-textcolor="text-white"
              className="bg-cyan-500 text-transparent border py-1 px-3 rounded-md"
            >
              C
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseStateHook;
