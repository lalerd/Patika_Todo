import React from 'react'

const User = ({username,setUsername}) => {

const handleClick=()=>{
  localStorage.removeItem("user")
  setUsername()
}

  return (
    <div className="navbar">
    <h4>Hi {username} :)</h4>
    <button className="login-btn" onClick={()=>handleClick()}>Logout</button></div>
   
  )
}

export default User