import React,{useEffect, useState} from 'react'
import {getAuth,createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import {app} from "../Components/Firebase"
import './Signup.css'


const auth = getAuth(app);

const Signup = () => {

    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const createuser = () =>
    {
        createUserWithEmailAndPassword(auth,email,password).then(value => alert("success"));
    }

    useEffect(()=>{
      onAuthStateChanged(auth,(user)=>{
console.log(user)
      })
    },[])

  return (
    <div className="signup-page">

      
      
        <b><label className='label1'>Email</label></b>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" 
        required placeholder='Enter your email here'/>
        
       
       
           <b><label className='lable2'>Password</label></b>
           <input value={password} type="Password" onChange={(e)=>setPassword(e.target.value)} 
           required placeholder='Enter your password here'/>
        

        <button className="btn3" onClick={createuser}>Signup</button>

    </div>
  )
}

export default Signup;
