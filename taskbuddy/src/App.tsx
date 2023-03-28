import React, {useState} from 'react';
import './App.css';
import TextField from './Components/TextField';
import { DoTask } from './Components/modal';
import DoTaskList from "./Components/DoTaskList"


const App: React.FC = () => {

  const [dotask, setTask] = useState<string | number>("");
  const [dotasks, setTasks] = useState<DoTask[]>([]);

  const handleAdd = (e: React.FormEvent) =>{
    e.preventDefault();

    if (typeof dotask === "string"){
      setTasks([...dotasks, {id: Date.now(), dotask, isDone: false}])
      setTask("")
    }
  };

  return (
    <div className="App">
      <span className='heading'>TaskBuddy</span>
       <TextField dotask={dotask} setTask={setTask} handleAdd={handleAdd}/>
       <DoTaskList dotasks={dotasks} setTasks={setTasks}/>
    </div>
  );
};

export default App;
