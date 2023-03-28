import React from 'react'
import { DoTask } from './modal'
import OneDoTask from './OneDoTask';
import './styles.css'

interface Props{
    dotasks: DoTask[];
    setTasks: React.Dispatch<React.SetStateAction<DoTask[]>>;
}
const DoTaskList: React.FC<Props> = ({dotasks, setTasks}:Props) => {
  return (
    <div className='dotasks'>
      {dotasks.map(dotask =>(
        <OneDoTask dotask={dotask}
         key={dotask.id}
         dotasks={dotasks}
         setTasks={setTasks}
         />
      ))}
    </div>
  )
}

export default DoTaskList 