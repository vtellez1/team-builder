import React, { useState } from "react";

const MembersForm = props => {
  const [member, setMember] = useState({ name: "" , email: "", role: ""});

  const handleChanges = e => {
    setMember({ ...member, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({name: '', email: '', role: ''})
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name:</label>
      <input 
      id="name" 
      type="text" 
      name="name" 
      onChange={handleChanges} 
      value= {member.name}/>

      <label htmlFor="email">Email:</label>
      <textarea 
      id="email" 
      type="email"
      name="email" 
      value = {member.email} 
      onChange={handleChanges}/>

    <label htmlFor="role">Role:</label>
      <textarea 
      id="role" 
      type="text"
      name="role" 
      value = {member.role} 
      onChange={handleChanges}/>

      <button type="submit">Add Member</button>
    </form>
  );
};

export default MembersForm;