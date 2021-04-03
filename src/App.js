import React from 'react';
import './App.css';
import LoginForm from './Component/Login/LoginForm';
import Form from './Component/SignUp/Form';


function App() {
  return (
    <div className="App">
      <Form/>
      <LoginForm /> 
    </div>
  );
}

export default App;
