import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Login from "./components/Login";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import User from "./components/User";


function App() {
  const [data, setData] = useState([]);
  const [editTask, setEditTask] = useState("");
  const [username, setUsername] = useState("");
  const [inputTask, setInputTask] = useState("");
  const fetchData = async () => {
    const res = await axios.get(
      "https://631ce5b34fa7d3264cb8e8bd.mockapi.io/todos"
    );

    setData(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setUsername(localStorage.getItem("user"));
  }, [setUsername, username]);

  return (
    <div className="App">
      {!username ? <Login username={username} setUsername={setUsername} /> :<div>
       <User username={username} setUsername={setUsername} />
      <TodoForm
    
     
        inputTask={inputTask}
        setInputTask={setInputTask}
        data={data}
        setData={setData}
        fetchData={fetchData}
        editTask={editTask}
        setEditTask={setEditTask}
      />
      <TodoList
        data={data}
        setData={setData}
        inputTask={inputTask}
        setInputTask={setInputTask}
        fetchData={fetchData}
        editTask={editTask}
        setEditTask={setEditTask}
      /> </div>}
    </div>
  );
}

export default App;