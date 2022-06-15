import React from "react";

export default function EnterTaskInputBox({ handleAddNewTask, handleGetLocalStorage}) {
  const [taskValue, setTaskValue] = React.useState("");
  const [isError, setIsError] = React.useState(false);

  const handleInputChnage = (e) => {
    let { value } = e.target;
    if (value.trim() !== "") {
      setIsError(false);
    }
    setTaskValue(value);
  };

  const handleTaskAdd = () => {
    if (taskValue.trim() === "") {
      setIsError(true);
    } else {
      handleAddNewTask(taskValue);
      setTaskValue("");
    }
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <input
          onChange={handleInputChnage}
          value={taskValue}
          type="text"
          placeholder="Enter a Task"
          style={{ width: "56%", fontSize: "30px", marginRight: "10px" }}
        />
        <button onClick={handleTaskAdd} style={{ fontSize: "20px", marginRight: "5px"}}>
          {" "}
          Add
        </button>
        <button onClick={handleGetLocalStorage} style={{ fontSize: "20px"}}>Get Tasks</button>
      </div>
      {isError && (
        <p
          style={{
            padding: "5px 0px",
            color: "red",
            fontWeight: "600",
          }}
        >
          Please enter a valid Task
        </p>
      )}
    </div>
  );
}
