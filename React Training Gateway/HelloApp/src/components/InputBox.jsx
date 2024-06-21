import React, { useState } from "react";

function InputBox(props) {
    const {addTask} = props;

    const [task, setTask] = useState('');

  const handleInput = (e) => {
    // Add code here
    setTask(e.target.value);
  };
  
  const addTaskChild = () => {
    // Add code here
    if(task.trim() !== '') {
        addTask(task);
        setTask('');
    }
  };

  return (
    <div className="inputbox">
      <input type="text" placeholder="Enter a task..." value={task} onChange={handleInput}/>
      <button onClick={addTaskChild}>Add Task</button>
    </div>
  );
}

export default InputBox;
