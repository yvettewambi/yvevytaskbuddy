import React from 'react'
import { DoTask } from './modal'
import './styles.css'

interface Props{
    dotasks: DoTask[];
    setTasks: React.Dispatch<React.SetStateAction<DoTask[]>>;
}
const DoTaskList: React.FC<Props> = ({dotasks, setTasks}:Props) => {
  return (
    <div className='dotasks'>
      {dotasks.map(dotask =>(
        <li>{dotask.dotask}</li>
      ))}
    </div>
  )
}

export default DoTaskList 