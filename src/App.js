import Header from './components/Header'
import './App.css';
import {useState} from 'react'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {

  const [tasks,setTasks]= useState([{
    id:1,text:'Food shopping',day: 'Feb 5th at 2:30pm',reminder:true,}
    ,{id:2,text:'assignment',day: 'Feb 4th at 12:30pm',reminder:true,}
    ,{id:3,text:'Interview',day: 'Feb 15th at 9:30am',reminder:false,}
])

//Function for deleting a Task
const deleteTask =(id)=>{
  setTasks(tasks.filter((task)=> task.id !== id))
}

//Function to Toogle Reminder
const toggleReminder =(id) => {
  setTasks(tasks.map((task)=> task.id ===id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length >0 ? <Tasks tasks={tasks} 
      onDelete={deleteTask} 
      onToggle={toggleReminder} /> : "No Tasks added"}
    </div>
  );
}

export default App;
