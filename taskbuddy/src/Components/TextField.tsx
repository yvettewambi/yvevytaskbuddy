import React, { useEffect, useRef } from 'react'
import './styles.css'

interface Props{
    dotask: string | number;
    setTask: React.Dispatch<React.SetStateAction<string | number>>;
    handleAdd: (e: React.FormEvent) => void;
}
const TextField = ({ dotask, setTask, handleAdd}:Props) => {

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [dotask]);

  return (
    <form className='input' onSubmit={handleAdd}>
      <input type="input"
      value={dotask}
      ref={inputRef}
      onChange={
        (e)=>setTask(e.target.value)} 
      placeholder='Create Tasks' className='textBox' />

      <button className='button' type='submit'>Go</button>
    </form>
  )
}

export default TextField
