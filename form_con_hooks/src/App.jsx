import React, { useState } from 'react';
import './App.css'
import UserForm from './components/UserForm/UserForm.component';
import Results from './components/Results/Results.component';

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  return (
    <div className='container'>
      <UserForm formData={formData} setFormData={setFormData} />
      <Results formData={formData} />
    </div>
  );
}

export default App;
