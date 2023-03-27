import React from 'react';
import './App.css';
import TextField from './Components/TextField';

const App: React.FC = () => {
  return (
    <div className="App">
      <span className='heading'>TaskBuddy</span>
       <TextField />
    </div>
  );
};

export default App;
