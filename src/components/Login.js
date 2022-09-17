import React,{useState} from 'react'

const Login = ({username,setUsername}) => {

 const handleLogin=()=>{
    localStorage.setItem("user",inputname)
    setUsername(inputname)
 }   
const [inputname,setInputname]=useState("")
  return (
    <div className='login-div'>
      <h3>Hi :)</h3>
     <input type="text" className="form-control"  placeholder="Enter Your Name" onChange={(e)=>setInputname(e.target.value)}   />
     <button type="submit" className='btn-login'  onClick={()=>handleLogin()}>Login</button>
    
    </div>
    
  )
}

export default Login