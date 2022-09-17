import axios from "axios";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const TodoList = ({
  data,
  setData,
  setInputTask,
  fetchData,
  setEditTask,
}) => {
  const handleDelete = async ({ id }) => {
    await axios
      .delete(`https://631ce5b34fa7d3264cb8e8bd.mockapi.io/todos/${id}`)
      .then(setData(data.filter((item) => item.id !== id)))
      .catch((err) => console.log(err));
    fetchData();
    console.log(data);
  };
  
  const handleEdit = async ({ id }) => {
    const editTodo = data.find((item) => item.id === id);
    setEditTask(editTodo);
    setInputTask(editTodo.todo);
    fetchData();
  };

  return (
    <div  className="todo_container">
      {data.map((item, id) => (
        <div key={id}>
          <h3>
            <div>
              <input onChange={(e) => e.preventDefault()} value={item.todo} className="input-task" />
              <button className="icon-btn" onClick={() => handleDelete(item)}>
                <FaTrashAlt />
              </button>
              <button className="icon-btn"  onClick={() => handleEdit(item)}>
                <FaRegEdit />
              </button>
            </div>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default TodoList;