import React, { useState } from "react";

const ToDoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: "Learn React", completed: false, important: false },
    { id: 2, task: "Set up Tailwind CSS", completed: true, important: false },
    { id: 3, task: "Build a Todo App", completed: false, important: false },
  ]);
  const [task, setTask] = useState("");
  const [isImportant, setIsImportant] = useState(false);
  const addTodo = () => {
    if (task.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), task, completed: false, important: isImportant },
      ]);
      setTask("");
      setIsImportant(false);
    }
  };
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const toggleImportant = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, important: !todo.important } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2 className="text-3xl font-bold">Add New To-Do</h2>

      <div className="flex justify-between bg-white py-6 px-10 mt-10">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="w-2/3 px-3 py-2 border rounded-md bg-[#f5f6fa]"
          placeholder="Add a new task"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md ml-2"
        >
          Add
        </button>
      </div>

      <ul className="mt-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={` text-base font-semibold py-6 px-10 border  rounded-lg my-5 flex justify-between items-center  ${
              todo.completed
                ? "bg-[#4880FF] border-transparent text-white"
                : "bg-white  text-black"
            }`}
          >
            <button
              onClick={() => toggleComplete(todo.id)}
              className="flex items-center"
            >
              {todo.completed ? (
                <i class="fa-regular fa-square-check text-2xl mr-5"></i>
              ) : (
                <i class="fa-regular fa-square text-2xl mr-5"></i>
              )}
              <span>{todo.task}</span>
            </button>

            <div className="flex flex-row items-center justify-center">
              {todo.completed ? (
                <button
                  onClick={() => removeTodo(todo.id)}
                  className="bg-[#6C99FF]  rounded-full"
                >
                  <i class="w-10 h-10 fa-solid fa-trash text-xl  flex items-center justify-center"></i>
                </button>
              ) : (
                <>
                  <button onClick={() => toggleImportant(todo.id)}>
                    {todo.important ? (
                      <i class="w-10 h-10 fa-solid text-[#FFD56D] fa-star  text-3xl"></i>
                    ) : (
                      <i class="w-10 h-10 fa-regular fa-star  text-3xl"></i>
                    )}
                  </button>
                  <button
                    onClick={() => removeTodo(todo.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <i class="w-10 h-10 fa-regular fa-circle-xmark  text-3xl ml-5"></i>
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
