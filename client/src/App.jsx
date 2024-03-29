import React from 'react';

/* Necessary router imports*/
import { Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login'; 
import TaskManagerApp from './components/TaskManagerApp'; 

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<TaskManagerApp />} />
       
      </Routes>
    </div>
  );
};

export default App;