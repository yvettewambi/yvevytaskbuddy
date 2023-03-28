import React, {useEffect, useRef, useState} from 'react'
import { DoTask } from './modal';
import './styles.css'
import {BiEditAlt} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'
import {MdDoneAll} from 'react-icons/md'

type Props ={
    dotask: DoTask;
    dotasks: DoTask[];
    setTasks: React.Dispatch<React.SetStateAction<DoTask[]>>;
}
const OneDoTask = ({ dotask, dotasks, setTasks}:Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editDoTask, setEditDoTask] = useState<string>(dotask.dotask);

  // Focus the input element when the edit state changes.
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

    const handleEdit = (e:React.FormEvent, id:number) =>{
      e.preventDefault();
      setTasks(
        dotasks.map((dotask) => (dotask.id===id?{...dotask, dotask:editDoTask}:dotask))
        )
        setEdit(false);
      
    }


    const handleDelete = (id:number) =>{
        setTasks(dotasks.filter((dotask)=>dotask.id !==id));
    };
    const handleDone = (id:number) =>{
        setTasks(
        dotasks.map((dotask) =>
        dotask.id===id?{...dotask,isDone:!dotask.isDone}:dotask)
        );
    }
  return (
    <form className='dotasks__single' onSubmit={(e)=>handleEdit(e, dotask.id)}>
      {
        edit?(
          <input 
          value={editDoTask} 
          onChange={(e)=>setEditDoTask(e.target.value)}
          className='dotasks__single--text' 
          ref={inputRef}
          />

        ):
          dotask.isDone ? (
            <s className='dotasks__single--text'>{dotask.dotask}</s>
          ) : (
            <span className='dotasks__single--text'>{dotask.dotask}</span>
          )}
        
      <div>
        <span className='icon' onClick={()=> {
          if(!edit && !dotask.isDone){
            setEdit(!edit)
          }
        }}>
          <BiEditAlt/></span>
        <span className='icon' onClick={()=> handleDelete(dotask.id)}>
           <AiFillDelete/></span>
        <span className='icon' onClick={()=> handleDone(dotask.id)}>
            <MdDoneAll/></span>
      </div>
    </form>
  )
}

export default OneDoTask
