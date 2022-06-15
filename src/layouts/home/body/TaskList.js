import React from "react";
import SingleTask from "../../../components/taskList/SingleTask";

export default function TaskList({ taskList, isBold }) {
  return (
    <div>
      {taskList.map((val, key) => {
        return <SingleTask key={key} title={val} index={key} isBold={isBold} />;
      })}
    </div>
  );
}
