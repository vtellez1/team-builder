import React, { useState } from 'react';

import Members from "./components/Members";
import MembersForm from "./components/MembersForm";
import './App.css';

function App() {

  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Sally Sue",
      email: "student@lambda.com",
      role: "Web Developer"
    }
  ]);

  const addNewMember = member =>{
    const newMember= {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember])
  }

  return (
    <div className="App">
      <h1>My Team</h1>
      <MembersForm addNewMember={addNewMember}/>
      <Members members={members}/>
      
    </div>
  );
}

export default App;
