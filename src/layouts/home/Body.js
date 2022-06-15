import React from "react";
import EnterTaskInputBox from "../../components/body/EnterTaskInputBox";
import TaskList from "./body/TaskList";

export default function Body({initialTaskList}) {
  const [taskList, setTaskList] = React.useState(initialTaskList);

  const handleAddNewTask = (taskValue) => {
    setTaskList([...taskList, taskValue]);
    localStorage.setItem("myTaskList",JSON.stringify([...taskList, taskValue]))
  };

  const handleGetLocalStorage=()=>{
    let myList = localStorage.getItem("myTaskList");
    let myTaskList =myList ?  JSON.parse(myList):[]
    console.log(myTaskList)
    setTaskList(myTaskList)
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          marginTop: "2%",
          width: "410px",
        }}
      >
        <EnterTaskInputBox handleAddNewTask={handleAddNewTask} handleGetLocalStorage={handleGetLocalStorage}/>
        <br />
        <br/>
        <TaskList taskList={taskList} isBold />
      </div>
    </div>
  );
}
