import './App.css';
import { useState } from 'react';



function App() {
  const [todoList,setTodoList]= useState([])
  const [newTask,setNewTask]= useState('')

  const handleChange=(event)=>{
      setNewTask(event.target.value)
  }

  const addTask = ()=>{
      const newTodoList = [...todoList,newTask]
      setTodoList(newTodoList)
      
      
  }

  const deleteTask = (taskName)=>{
      const newTodoList = todoList.filter((task)=>{
         if(task === taskName){
          return false
         }else{
          return true
         }
      })
      setTodoList(newTodoList)
  }
   return <div>
        <div className="addTask">
          <input type="text" onChange={handleChange} />
          <button type="button" onClick={addTask}>addTask</button>
          {newTask}
        </div>
        <div className="list">
            {todoList.map((task)=>{
              
              return <div>
                <h1>{task}</h1>
                <button onClick={()=>{deleteTask(task)}}>x</button>
              </div>
            })}
        </div>
       
    </div>
}





export default App;
