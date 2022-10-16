import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const members = ["test1", "test2", "test3","test4", "test5"]

function App() {

 const [allMembers, setAllMembers] = useState(members)

 const shuffleMembers = () => {
  const copy = [...allMembers]
  console.log("Shuffle members")
  const shuffled = copy.sort(() => 0.5 - Math.random());
  setAllMembers(shuffled)
 }
 

  return (
    <div className="App">
      {allMembers.map((m)=> <div key={m}>{m}</div>)}
      <button onClick={shuffleMembers}>shuffle members</button>
    </div>
  );
}

export default App;
