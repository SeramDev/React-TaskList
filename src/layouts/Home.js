import React from "react";
import TopNavigationBar from "./common/TopNavigationBar";
import Body from "./home/Body";

const initialTaskList = [];

export default function Home() {
  return (
    <div>
      <TopNavigationBar />
      <Body initialTaskList={initialTaskList} />
    </div>
  );
}
