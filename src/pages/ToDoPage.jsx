import React from "react";
import DefaultLayout from "../Layout/DefaultLayout";
import ToDoList from "../components/ToDoList";

const ToDoPage = () => {
  return (
    <DefaultLayout>
      <ToDoList />
    </DefaultLayout>
  );
};

export default ToDoPage;
