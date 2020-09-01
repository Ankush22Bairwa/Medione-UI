import React , { useState, useEffect } from 'react';
import './App.css';
import doctorlist from './components/doctors-list';
function App() {
  const [doctor, setDoctor] = useState([]);
  
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/patients/",{
      method: "GET",
      headers: {
        'Content-type' : "application/json",
        'Authorization' : "Token <token>"
      }
    })
    .then(res => res.json())
    .then(res => setDoctor(res))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Doctor List</h1>
      </header>
      <div className="layout">
          <doctorlist />
          <div>About US </div>
        </div>
    </div>
  );
}

export default App;
