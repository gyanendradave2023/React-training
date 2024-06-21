// rfce
import React, { useState } from "react";
import List from "./List";
import InputBox from "./InputBox";

function Todo() {
  const [tasksArr, setTasks] = useState([]);
  
  const addTask = (inputValue) => {  
    setTasks([...tasksArr, inputValue]);
  };

  const handleDelete = (idx) => {  
    const updateTask = [...tasksArr];
    updateTask.splice(idx, 1);
    setTasks(updateTask);
  };

  return (
    // react Fragments
    <>
      <InputBox addTask={addTask} />
      <List tasksArr={tasksArr} handleDelete={handleDelete}></List>
    </>
  );
}

export default Todo;
