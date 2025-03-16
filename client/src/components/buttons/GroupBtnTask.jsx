import React from "react";

const GroupBtnTask = () => {
  return (
    <div className="xs:row xs:flex xs:w-full md:hidden sm:hidden">
      <button
        class="rounded-md w-full rounded-r-none py-2 px-4 text-center text-sm transition-all hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 focus:text-white focus:bg-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Todo
      </button>
      <button
        class="rounded-none w-full border-l border-r border-slate-300 py-2 px-4 text-center text-sm transition-all hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Doing
      </button>
      <button
        class="rounded-md w-full rounded-l-none py-2 px-4 text-center text-sm transition-all hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 focus:text-white focus:bg-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Done
      </button>
    </div>
  );
};

export default GroupBtnTask;
