import axios from 'axios';
import React, { useEffect } from 'react'

const TodoForm = ({inputTask,setInputTask,data,setData,fetchData, setEditTask,editTask})  => {
useEffect(()=>{
  if(editTask){
    setInputTask(editTask.todo)
  }else{
    setInputTask("")
  }
},[setInputTask,editTask])
const handleClick = async (e)=>{
  e.preventDefault();
  if(!editTask){
    if(inputTask.length>=3){
    await axios.post("https://631ce5b34fa7d3264cb8e8bd.mockapi.io/todos",{
   todo:inputTask}).then((res) => setData((data)=> [...data,res])).catch((err)=>console.log(err))
   console.log(data)
  fetchData()
  setInputTask("")
}
else{
  data.map((item)=>{
    if(item.id === editTask.id){
       axios.put(`https://631ce5b34fa7d3264cb8e8bd.mockapi.io/todos/${editTask.id}`,
    {todo:inputTask}).then((res)=>setData((data)=>[...data,res]))
    }else{
      return item
    }
    fetchData()
    setEditTask("")
  })
}
fetchData()
  }
}
  return (
  <div>
  <form>
    <input
type="text"
placeholder="Enter a Todo ..."
className='addTask form-control d-inline'
onChange={(e)=>setInputTask(e.target.value)}
value={inputTask}
/>
<button  type='submit' className='task-btn' onClick={handleClick}> {editTask ? "OK" : "ADD"} </button>
  </form>
    </div>
  )
}
export default TodoForm