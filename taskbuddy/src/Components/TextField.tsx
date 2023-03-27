import React from 'react'
import './styles.css'

interface Props{
    dotask: string | number;
    setTask: React.Dispatch<React.SetStateAction<string | number>>;
    handleAdd: (e: React.FormEvent) => void;
}
const TextField = ({ dotask, setTask, handleAdd}:Props) => {
  return (
    <form className='input' onSubmit={handleAdd}>
      <input type="input"
      value={dotask}
      onChange={
        (e)=>setTask(e.target.value)
      } placeholder='Create Task' className='textBox' />

      <button className='button' type='submit'>Go</button>
    </form>
  )
}

export default TextField
