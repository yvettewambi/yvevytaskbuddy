import React from 'react'
import './styles.css'

const TextField = () => {
  return (
    <form className='input'>
      <input type="input" placeholder='Create Task' className='textBox' />
      <button className='button' type='submit'>Go</button>
    </form>
  )
}

export default TextField
