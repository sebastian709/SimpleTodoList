import React, { useEffect, useState } from "react";
// import { getUsers } from "../api/api";

const UseEffectHook = () => {
  const [todo, setTodo] = useState([]);
  const [itemID, setItemID] = useState(0);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        if (itemID) {
          // Ensure itemID is valid
          const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${itemID}`);

          // const response = await getUsers();
          const json = await response.json();

          
          setTodo(json); // Set the response data in state

        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTodo(); // Call the function to fetch data
  }, [itemID]);

  
  const itemInputID = (e) => {
    setItemID(e.target.value);
  };

  console.log(todo);


  return (
    <>
      <div className="flex flex-col w-80 border my-10 mx-5 px-5">
        <label className="border-b font-bold py-3 border-slate-900 text-center">
          USE EFFECTS HOOKS
        </label>
        
        <div className="flex flex-col my-4">
          <label htmlFor="">ID</label>
          <input
            type="text"
            className="border-b itemIdInput"
            onChange={itemInputID}
            placeholder="Please Enter ID"
          />
        </div>
        <h3 className="mt-5 text-center font-bold">Todo Item:</h3>
        <hr className="" />
        
        {todo ? (
          <div>
            <p>ID: {todo.id}</p>
            <p>Title: {todo.title}</p>
            <p>Completed: {todo.completed ? "Yes" : "No"}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default UseEffectHook;
