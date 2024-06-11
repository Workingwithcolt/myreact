import React,{useEffect, useState} from 'react'
import {getAuth,createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth"
import {app} from "../Components/Firebase"
import './Signup.css'


const auth = getAuth(app);

const Signup = () => {

    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const signinUser = () =>
      {
        signInWithEmailAndPassword(auth,email,password)
        .then((value) => console.log("Signin success"))
        .catch((err) =>console.log(err));
      };

    // const createuser = () =>
    // {
    //     createUserWithEmailAndPassword(auth,email,password).then(value => alert("success"));
    // }

   

  return (
    <div className="signup-page">
        <b><label className='label1'>Email</label></b>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" 
        required placeholder='Enter your email here'/>
        
       
       
           <b><label className='lable2'>Password</label></b>
           <input value={password} type="Password" onChange={(e)=>setPassword(e.target.value)} 
           required placeholder='Enter your password here'/>
        

        <button className="btn3" onClick={signinUser}>Signup</button>

    </div>
  )
}

export default Signup;
